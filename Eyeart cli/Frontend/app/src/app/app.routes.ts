import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { EditarComponent } from './components/pedido/editar/editar.component';
import { AgregarComponent } from './components/pedido/agregar/agregar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar/agregar.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { AgregarCiudadComponent } from './components/ciudad/agregar/agregar.component';
import { EditarCiudadComponent } from './components/ciudad/editar/editar.component';
import { AgregarMetodoPagoComponent } from './components/metodopago/agregar/agregar.component';
import { EditarMetodoPagoComponent } from './components/metodopago/editar/editar.component';
import { MetodopagoComponent } from './components/metodopago/metodopago.component';
import { TipodocumentoComponent } from './components/tipodocumento/tipodocumento.component';
import { AgregarTipoDocumentoComponent } from './components/tipodocumento/agregar/agregar.component';
import { EditarTipoDocumentoComponent } from './components/tipodocumento/editar/editar.component';
import { RegistroComponent } from './components/forms/registro/registro.component';
import { LoginComponent } from './components/forms/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgregarProductoComponent } from './components/productos/agregar/agregar.component';
import { EditarProductoComponent } from './components/productos/editar/editar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AgregarCategoriaComponent } from './components/categoria/agregar/agregar.component';
import { EditarCategoriaComponent } from './components/categoria/editar/editar.component';
import { RolComponent } from './components/rol/rol.component';
import { AgregarRolComponent } from './components/rol/agregar/agregar.component';
import { EditarRolComponent } from './components/rol/editar/editar.component';
import { GestionrolesComponent } from './components/gestionroles/gestionroles.component';
import { AgregarGestionRolComponent } from './components/gestionroles/agregar/agregar.component';
import { EditarGestionRolComponent } from './components/gestionroles/editar/editar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AgregarCarritoComponent } from './components/carrito/agregar/agregar.component';
import { EditarCarritoComponent } from './components/carrito/editar/editar.component';
import { ItemscarritoComponent } from './components/itemscarrito/itemscarrito.component';
import { AgregarItemsCarritoComponent } from './components/itemscarrito/agregar/agregar.component';
import { EditaritemsCarritoComponent } from './components/itemscarrito/editar/editar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { ProductoUnicoClientesComponent } from './components/productos/producto-unico-clientes/producto-unico-clientes.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}
    ,
    {path: 'pedido', component: PedidoComponent}
    ,
    {path: 'producto/agregar', component: AgregarProductoComponent}
    ,
    {path: 'producto/editar/:idProducto', component: EditarProductoComponent}
    ,
    {path: 'categoria', component: CategoriaComponent}
    ,
    {path: 'categoria/agregar', component: AgregarCategoriaComponent}
    ,
    {path: 'categoria/editar/:idCategoria', component: EditarCategoriaComponent}
    ,
    {path: 'rol', component: RolComponent}
    ,
    {path: 'rol/agregar', component: AgregarRolComponent}
    ,   
    {path: 'rol/editar/:idRol', component: EditarRolComponent}
    , 
    {path: 'gestionroles', component: GestionrolesComponent}
    ,
    {path: 'gestionroles/agregar', component: AgregarGestionRolComponent}
    ,
    {path: 'gestionroles/editar/:Usuario_idUsuario', component: EditarGestionRolComponent}
    ,
    {path: 'pedido/agregar', component: AgregarComponent}
    ,
    {path: 'pedido/editar/:idPedido', component: EditarComponent}
    ,
    {path: 'producto', component: ProductosComponent}
    ,
    {path: 'usuario', component: UsuarioComponent}
    ,
    {path: 'usuario/agregar', component: AgregarUsuarioComponent}
    ,
    {path: 'usuario/editar/:idUsuario', component: EditarUsuarioComponent}
    ,
    {path: 'ciudad', component: CiudadComponent}
    ,
    {path: 'ciudad/agregar', component: AgregarCiudadComponent}
    ,
    {path: 'ciudad/editar/:idCiudad', component: EditarCiudadComponent}
    ,
    {path: 'metodopago', component: MetodopagoComponent}
    ,
    {path: 'metodopago/agregar', component: AgregarMetodoPagoComponent}
    ,
    {path: 'metodopago/editar/:idMetodoPago', component: EditarMetodoPagoComponent}
    ,
    {path: 'tipodocumento', component: TipodocumentoComponent}
    ,
    {path: 'tipodocumento/agregar', component: AgregarTipoDocumentoComponent}
    ,
    {path: 'tipodocumento/editar/:idTipoDocumento', component: EditarTipoDocumentoComponent}
    ,
    {path: 'carrito', component: CarritoComponent}
    ,
    {path: 'carrito/agregar', component: AgregarCarritoComponent}
    ,
    {path: 'carrito/editar/:idCarrito', component: EditarCarritoComponent}
    ,
    {path: 'itemscarrito', component: ItemscarritoComponent}
    ,
    {path: 'itemscarrito/agregar', component: AgregarItemsCarritoComponent}
    ,
    {path: 'itemscarrito/editar/:idItem', component: EditaritemsCarritoComponent}
    ,
    {path: 'catalogo', component: CatalogoComponent}
    ,
    {path: 'cuenta', component: CuentaComponent}
    ,
    {path: 'productI/:idProducto', component: ProductoUnicoClientesComponent}
    ,
    {path: 'acerca-de', component: AcercaDeComponent}
    ,
    //FORMULARIOS
    {path: 'registro', component: RegistroComponent}
    ,
    {path: 'login', component: LoginComponent}
    ,
    {path: 'contacto', component: ContactoComponent}
    ,
    {path: 'acerca', component: AcercaDeComponent}
    ,

    {path: '**', redirectTo: '',pathMatch: 'full'}
    
    ];
    

    export const routing = RouterModule.forRoot(routes);
