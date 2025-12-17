//6810210052 Jiratti Jingbumrung
#include <iostream>
using namespace std;

int main() {
    int hour, money, extra=0, sum;
    cout<<"Input Hour:";
    cin>>hour;
    money=hour*100;
    if(hour>6){
        extra=(hour-6)*100;
    }
    sum = money + extra;
    cout<<"Sum money: "<<sum<<" THB";
    return 0;
}