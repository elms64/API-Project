import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';

//Angular routing module. Defining pathways for navigation.

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'about-us',
  component: AboutUsComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
},
{
  path: 'chatbot',
  component: ChatbotComponent
},
  
{
  path: '', redirectTo: 'home',  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
