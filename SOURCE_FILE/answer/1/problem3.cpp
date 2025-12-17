/* 6810210052 Jiratti Jingbumrung In*/

#include <iostream>

using namespace std;

int main()
{
    int pre,mid,post;
    cout<<"คะแนนเก็บ: ";
    cin>>pre;
    cout<<"คะแนนสอบกลางภาค: ";
    cin>>mid;
    cout<<"คะแนนสอบปลายภาค: ";
    cin>>post;
    pre = pre + mid + post;
    if(pre > 49){
        cout<<"ได้เกรด: A";
    }
    else{
        cout<<"ได้เกรด: E";
    }
    return 0;
}
