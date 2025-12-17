#include <iostream>

using namespace std;

int main()
{
    float cost=0, tax;
    int choice=0;
    while(choice!=7)
    {
       cout<<"Menu\n1. Rose 19 baht\n2. Lily 25 baht\n3. Daisy 22 baht\n4. Lotus 10 baht\n5. Orchid 15 baht\n6. Tulip 30 baht\n7. End\n\nChoice:";
       cin>>choice;
       switch(choice)
       {
           case 1:
           {
               cost += 19;
               break;
           }
           case 2:
           {
               cost += 25;
               break;
           }
           case 3:
           {
               cost += 22;
               break;
           }
           case 4:
           {
               cost +=10;
               break;
           }
           case 5:
           {
               cost += 15;
               break;
           }
           case 6:
           {
               cost += 30;
               break;
           }
           case 7:
           {
               break;
           }
           default:
            {
               break;
            }
       }



    }
    tax = cost/10;
   cout<<"\n\n\nTotal before tax: "<<cost;
   cout<<"\ntax: "<<tax;
   cost += tax;
   cout<<"\nTotal after tax: "<<cost;



    return 0;
}
