//6810210052 Jiratti Jingbumrung
#include <iostream>

using namespace std;

int main()
{
    int w_t,w,h;
    cout<<"Enter width:";
    cin>>w;
    cout<<"Enter height:";
    cin>>h;
    for(;h>0;h--)
    {
        w_t = w;
        for(;w_t>0;w_t--)
        {
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}
