import { ICar } from './../shared/data-access/models';
import { Inject, Injectable } from "@angular/core";
import { ComponentStore, OnStateInit } from "@ngrx/component-store";
import { ApiClient } from "../shared/data-access";
import { ICarList } from "./cart-list.state";
import { switchMap, map, tap, of, withLatestFrom, pipe } from "rxjs";

@Injectable()
export class UCCarlistStore extends ComponentStore<ICarList> implements OnStateInit{

    public readonly cartList$ = this.select((state) => state.carList);
    public readonly filter$ = this.select((state) => state.filter);
    public readonly keysearch$ = this.select((state) => state.keysearch);

    public readonly vm$ = this.select(
        this.cartList$,
        this.filter$,
        this.keysearch$,
        (carList, filter, keysearch) => ({carList, filter, keysearch})
    )

    constructor(
        @Inject(ApiClient) protected readonly _apiClient: ApiClient
    ) {
        super(initState)
    }

    ngrxOnStateInit(): void {
        // this.getCar();
    }

    public getCar = this.effect(
        req$ => req$.pipe(
          switchMap(req => this._apiClient.getCar()),
          map(data => this.updateCarList(data))
        )
    )

    public filterBrand = this.effect(
        pipe(
            withLatestFrom(this.state$),
            tap(data => this.setKeySearch((data[0] as {brandName: string}).brandName)),
            map(data => {
                const brandName = (data[0] as {brandName: string}).brandName;
                const carList = data[1].carList;
                const tmp = carList.filter((car) => car.brandName.toLowerCase() === brandName.toLowerCase());
                return of(this.updateFilter(tmp));
            } )
        ),
    )

    public updateCarList = this.updater(
        (state, carList: ICar[]) => ({
          ...state,
          carList,
        })
    )

    public updateFilter = this.updater(
        (state, filter: ICar[]) => ({
          ...state,
          filter,
        })
    )

    public setFilter(filter: ICar[]) {
        this.patchState({ filter });
    }

    public setKeySearch(keysearch: string) {
        this.patchState({ keysearch });
    }

}

const initState: ICarList = {
    carList: [
        {
            "brandName": "Toyota",
            "description": "Jeep Grand Cheroke",
            "quantity": 12,
            "lastUpdate": "25/12/2022",
            "activated": true,
            "brandImg": "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg"
        },
        {
            "brandName": "BMW",
            "description": "Brand description too long..",
            "quantity": 800,
            "lastUpdate": "12/12/2022",
            "activated": false,
            "brandImg": "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg"
        },
        {
            "brandName": "MAZDA",
            "description": "Audi Q7",
            "quantity": 800,
            "lastUpdate": "12/12/2022",
            "activated": true,
            "brandImg": "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg"
        },
        {
            "brandName": "Hyundai",
            "description": "Brand description too long..",
            "quantity": 800,
            "lastUpdate": "12/12/2022",
            "activated": false,
            "brandImg": "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg"
        },
    ],
    filter: [],
    keysearch: ''
}