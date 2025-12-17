#include <iostream>
#include <string>

using namespace std;

int main()
{
    float student[10][4];
    int student_num = 1;
    string choice = "y";
    while(choice == "Y" | choice == "y" && student_num < 11)
    {
        cout << "Student " << student_num << ":"  << endl;
        cout << "Exam 1: ";
        cin >> student[student_num - 1][0];
        cout << "Exam 2: ";
        cin >> student[student_num - 1][1];
        cout << "Exam 3: ";
        cin >> student[student_num - 1][2];
        student[student_num - 1][3] = (student[student_num - 1][0] + student[student_num - 1][1] + student[student_num - 1][2])/3;
        cout << "Continue?(y/n): ";
        cin >> choice;
        student_num++;
    }
    for(int i = 0;i < student_num-1; i++)
    {
        cout << "Student " << i+1 << "'s average is " << student[i][3] << endl;
    }

    return 0;
}
