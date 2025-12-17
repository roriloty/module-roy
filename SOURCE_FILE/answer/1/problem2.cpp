/* 6810210052 Jiratti Jingbumrung In*/

#include <iostream>

using namespace std;

int main()
{
    int num1;
    cout<<"Enter Num: ";
    cin>>num1;
    num1 = num1%2;
    if(num1>0){
        cout<<"เป็นเลขคี่";
    }
    else{
        cout<<"เป็นเลขคู่";
    }
    return 0;
}
