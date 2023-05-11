# **Nusantara-Store**
Repository untuk Pengerjaan Final Project Calon Admin Lab MCI (Manajemen Cerdas Informasi).

## **Identitas**
| Nama                     | NRP        |
| -------------------------| -----------| 
| Akmal Ariq Romadhon      | 5025211188 |

# **_Database Modelling_**
Sebelum memulai pengembangan API, perlu dilakukan _Database Modelling_ untuk menganalisis kebutuhan yang akan dibuat, serta agar tidak salah dalam proses pembuatannya. Berikut adalah _Database Modelling_ untuk pengerjaan Final Project Calon Admin Lab MCI (Manajemen Cerdas Informasi).

## **_Conceptual Database Model_ (CDM)**
Berikut adalah _Conceptual Database Model_ dari _Website E-Commerce_ Nusantara Store. Terdapat beberapa tabel, diantaranya ialah _User, Shop, Products, Payment, Order, Withdraw, Messages, Event, Conversation_, dan _CouponCode_. 

![CDM1](https://cdn.discordapp.com/attachments/1083730715113426985/1106219463239540766/PDM_FP_MCI.png)

## **_Physical Database Model_ (PDM)**
Secara garis besar, _Physical Database Model_ yang digunakan dalam pengerjaan tugas ini hampir sama dengan _Conceptual Database Model._ Hanya saja, tabel-tabel yang memiliki relasi akan menambahkan _Foreign Key_ menjadi sebuah entitas. Berikut adalah visualisasi dari _Physical Database Model_ yang telah dibuat:

![PDM1](https://cdn.discordapp.com/attachments/1083730715113426985/1106219464262963261/CDM_FP_MCI.png)

# **_About Nusantara Store_**

## **Fitur**
Dalam _website Nusantara Store, terdapat beberapa fitur yang dapat digunakan. Berikut adalah detail dari fitur-fitur tersebut:<br>

- **_General_**
    - _Browse Product_
    - _Search by Categories_
    - _Find Most Wanted Items_

- **_User_**
    - _Register_
    - _Login & Logout_
    - _Order_
    - _Change_ _Password_
    - _Track Order_
    - _Update Account_ (_Email, Addres, etc._)
    - _Chat_

- **_Seller_**
    - _Register_
    - _Login & Logout_
    - _Seller Dashboard_
    - _Create Product_
    - _Create Event_
    - _Delete Product_
    - _Withdraw Money_
    - _Chat_

- **_Admin_**
    - _Admin Dashboard_
    - _Get All Users Data_
    - _Get All Selers Data_
    - _Get All Products Data_
    - _Get All Events Data_
    - _Delete_ _Seller_
    - _Delete User_


## **_Deployment_**
Setelah membuat _Database Model_, maka dapat dilakukan pembuatan _Website_ dari Nusantara Store. Website dapat diakses pada _link_ [berikut](https://nusantara-store-project.vercel.app/) atau menggunakan _link_ berikut:
https://nusantara-store-project.vercel.app/ <br>

_**Important Notes:**_ Fitur _register_ tidak bisa digunakan karena masalah _upload_ gambar. Sehingga untuk melihat fitur _dashboard_ dapat menggunakan akun berikut: <br>
- _Email_: nusantarastore00@gmail.com
- _Password_: testing123

## **Dokumentasi**
Untuk melihat dokumentasi dari implementasi untuk _CRUD API_ yang telah dibuat, digunakan _software_ Postman. Dokumentasi tersebut dapat diakses [disini](https://documenter.getpostman.com/view/26786734/2s93ebTqtL) atau menggunakan _link_ berikut:\
https://its.id/m/DokumentasiFPMCI

# **End Of The Line**
```c
#include <stdio.h>

int main(){
  printf("Thank you!");
}
```
