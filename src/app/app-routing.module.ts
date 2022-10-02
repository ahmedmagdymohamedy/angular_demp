import { NotesComponent } from './components/notes/notes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "rigster", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsComponent },
  { path: "productDetails/:id", component: ProductDetailsComponent },
  { path: "users", component: UsersComponent },
  { path: "posts", component: PostsComponent },
  { path: "post/:id", component: PostsDetailsComponent },
  { path: "notes", component: NotesComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
