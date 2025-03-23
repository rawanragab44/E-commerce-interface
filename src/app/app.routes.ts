import { Routes } from '@angular/router';
import { ProdutlistComponent } from './produtlist/produtlist.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SettingComponent } from './setting/setting.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductCounterComponent } from './product-counter/product-counter.component';

export const routes: Routes = [

    {
        path:"",
        component:ProdutlistComponent,
        title:"Produtlist"
    },
    
    {
        path:"add-product",
        component:AddProductComponent,
        title:"add-product"
    },
    {
        path:"product-details/:id",
        component:DetailsproductComponent,
        title:"productDetails",
    },
    {
        path:"setting",
        component:SettingComponent,
        title:"setting"
    },
    {
        path:"login",
        component:LoginComponent,
        title:"login"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"register"
    },
    {
        path:"product-counter",
        component:ProductCounterComponent,
        title:"productCounter"
    },
   
    {
        path:"**",
        component:NotfoundComponent,
        title:"Notfound"
    }
];
