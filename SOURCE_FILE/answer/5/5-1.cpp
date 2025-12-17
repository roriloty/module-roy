//6810210052 Jiratti Jingbumrung
#include <iostream>

using namespace std;

int main()
{
    float avg=0;
    int temp;
    int i=1;
    for(;;)
    {
        cout<<"Enter number "<<i<<":";
        cin>>temp;
        avg += temp;
        ++i;
        if(i>5)
        {
            break;
        }
    }
    avg = avg/5;
    cout<<"Average is "<<avg;
    return 0;
}
