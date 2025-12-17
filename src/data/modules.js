export const courseData = {
  title: "Module 101 (โมดูล 101)",
  modules: [
    {
      id: "m1",
      title: "บทที่ 1: พื้นฐานการเขียนโปรแกรม (Basics)",
      pdfSrc: "/assets/r/1.ความเป็นมาของภาษาซี2565.pdf",
      lessons: [
        {
          id: "l1-1",
          title: "การบวกเลข 2 จำนวน",
          description: "เขียนโปรแกรมเพื่อรับค่าตัวเลข 2 ตัวแล้วแสดงผลลัพธ์ของการบวก",
          question: {
            text: "จงเขียนโปรแกรมรับค่าตัวเลขจำนวนเต็ม 2 ตัว (num1, num2) แล้วแสดงผลลัพธ์การบวกทางหน้าจอ",
            type: "text",
          },
          answer: {
            title: "เฉลยโค้ด (Solution Code)",
            language: "cpp",
            fileName: "problem1.cpp",
            content: `#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    cout << "Sum: " << num1 + num2 << endl;
    return 0;
}`
          }
        },
        {
          id: "l1-2",
          title: "เลขคู่ เลขคี่ (Even/Odd)",
          description: "เขียนโปรแกรมตรวจสอบว่าตัวเลขที่รับมาเป็นเลขคู่หรือเลขคี่",
          question: {
            text: "จงเขียนโปรแกรมรับค่าตัวเลข 1 ตัว แล้วตรวจสอบว่าเป็นเลขคู่ (Even) หรือเลขคี่ (Odd)",
            type: "text",
          },
          answer: {
            title: "เฉลยโค้ด (Solution Code)",
            language: "cpp",
            fileName: "problem2.cpp",
            content: `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    if (num % 2 == 0) {
        cout << "Even number" << endl;
    } else {
        cout << "Odd number" << endl;
    }
    return 0;
}`
          }
        },
        {
          id: "l1-3",
          title: "คำนวณเกรด (Grading)",
          description: "คำนวณเกรดจากคะแนนรวม",
          question: {
            text: "รับคะแนนเก็บ, กลางภาค, ปลายภาค ถ้ารวมกันมากกว่า 50 ได้เกรด A ถ้าน้อยกว่าได้ E",
            type: "text",
          },
          answer: {
            title: "เฉลยโค้ด (Solution Code)",
            language: "cpp",
            fileName: "problem3.cpp",
            content: `#include <iostream>
using namespace std;

int main() {
    int score1, score2, score3;
    cout << "Enter scores (Collect/Mid/Final): ";
    cin >> score1 >> score2 >> score3;
    int total = score1 + score2 + score3;
    
    if (total > 50) {
        cout << "Grade: A" << endl;
    } else {
        cout << "Grade: E" << endl;
    }
    return 0;
}`
          }
        }
      ]
    },
    {
      id: "m2",
      title: "บทที่ 2: วิเคราะห์โค้ด (Code Analysis)",
      pdfSrc: "/assets/r/2. องค์ประกอบของภาษาซี.pdf",
      lessons: [
        {
          id: "l2-1",
          title: "หาข้อผิดพลาด (Debug)",
          description: "วิเคราะห์ภาพโค้ดและหาข้อผิดพลาด",
          question: {
            text: "จงดูภาพ Code ที่กำหนดให้ แล้วระบุจุดที่ผิดพลาด (Syntax Error)",
            type: "image",
            imageSrc: "/assets/q/2.1-A.png",
          },
          answer: {
            title: "เฉลย (Answer)",
            fileName: "2.1-A.txt",
            content: `ผิด เพราะไม่มี ;
ผิด เพราะ main เป็นคำสงวน
ผิด เพราะมี ,
ถูก
ผิด เพราะ char ใช้เก็บได้เฉพาะหนึ่งตัวอักษร`
          }
        },
        {
          id: "l2-2",
          title: "วิเคราะห์ผลลัพธ์ (Output)",
          description: "หาผลลัพธ์จากการทำงานของโค้ด",
          question: {
            text: "จงดูภาพ Code ที่กำหนดให้ แล้วบอกผลลัพธ์ (Output) ที่จะแสดงทางหน้าจอ",
            type: "image",
            imageSrc: "/assets/q/2.1-B.png",
          },
          answer: {
            title: "เฉลย (Answer)",
            fileName: "2.1-B.txt",
            content: `Hello

Tax is 10%

45

-123

12.34

w

Hello`
          }
        }
      ]
    },
    {
      id: "m3",
      title: "บทที่ 3: ตัวดำเนินการและนิพจน์ (Operators)",
      pdfSrc: "/assets/r/3.ตัวดำเนินการและนิพจน์2565.pdf",
      lessons: [
        {
          id: "l3-1",
          title: "ศึกษาเอกสารบทที่ 3",
          description: "เรียนรู้เรื่องตัวดำเนินการและนิพจน์จากเอกสาร",
          question: {
            text: "กรุณาศึกษาเนื้อหาจากเอกสาร PDF ในแท็บ \"ดาวน์โหลด\" หรือดูด้านล่าง",
            type: "text",
          },
          answer: {
            title: "-",
            content: "ไม่มีแบบฝึกหัดสำหรับบทนี้ เน้นการศึกษาเอกสาร"
          }
        }
      ]
    },
    {
      id: "m4",
      title: "บทที่ 4: ผังงาน (Flowchart)",
      pdfSrc: "/assets/r/4ผังงาน.pdf",
      lessons: [
        {
          id: "l4-1",
          title: "Flowchart 4-1",
          description: "วิเคราะห์การทำงานของ Flowchart 4-1",
          question: {
            text: "จงพิจารณา Flowchart 4-1 (ฝั่งซ้าย) แล้ววิเคราะห์การทำงาน",
            type: "image",
            imageSrc: "/assets/q/4-1 and 4-2.png",
          },
          answer: {
            title: "เฉลย Flowchart 4-1",
            fileName: "Flowchart4-1.png",
            imageSrc: "/assets/a/Flowchart4-1.png",
            content: ""
          }
        },
        {
          id: "l4-2",
          title: "Flowchart 4-2",
          description: "วิเคราะห์การทำงานของ Flowchart 4-2",
          question: {
            text: "จงพิจารณา Flowchart 4-2 (ฝั่งขวา) แล้ววิเคราะห์การทำงาน",
            type: "image",
            imageSrc: "/assets/q/4-1 and 4-2.png",
          },
          answer: {
            title: "เฉลย Flowchart 4-2",
            fileName: "Flowchart4-2.png",
            imageSrc: "/assets/a/Flowchart4-2.png",
            content: ""
          }
        },
        {
          id: "l4-3",
          title: "Flowchart 4-3",
          description: "เขียนโปรแกรมคำนวณเงินจาก Flowchart",
          question: {
            text: "จงเขียนโปรแกรมภาษา C++ ให้ทำงานสอดคล้องกับ Flowchart ที่กำหนด",
            type: "image",
            imageSrc: "/assets/q/4-3.png",
          },
          answer: {
            title: "เฉลย (Solution)",
            language: "cpp",
            fileName: "4-3.cpp",
            imageSrc: "/assets/a/Flowchart4-3.png",
            content: `//6810210052 Jiratti Jingbumrung
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
}`
          }
        }
      ]
    },
    {
      id: "m5",
      title: "บทที่ 5: ลูปและเงื่อนไข (Loop & Condition)",
      pdfSrc: "/assets/r/5.Lecture5-2565.pdf",
      lessons: [
        {
          id: "l5-1",
          title: "โจทย์ข้อ 5-1",
          description: "เขียนโปรแกรมหาค่าเฉลี่ย",
          question: {
            text: "จงเขียนโปรแกรมรับค่าตัวเลข 5 ตัว แล้วหาค่าเฉลี่ย (Average) แสดงผลตามภาพ",
            type: "image",
            imageSrc: "/assets/q/5-1.png",
          },
          answer: {
            title: "โค้ดเฉลย (Solution)",
            language: "cpp",
            fileName: "5-1.cpp",
            content: `//6810210052 Jiratti Jingbumrung
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
`
          }
        },
        {
          id: "l5-2",
          title: "โจทย์ข้อ 5-2",
          description: "เขียนโปรแกรมสร้างรูปสี่เหลี่ยมด้วย *",
          question: {
            text: "จงเขียนโปรแกรมรับค่าความกว้าง (width) และความสูง (height) แล้วแสดงรูปสี่เหลี่ยมด้วยเครื่องหมาย *",
            type: "image",
            imageSrc: "/assets/q/5-2.png",
          },
          answer: {
            title: "โค้ดเฉลย (Solution)",
            language: "cpp",
            fileName: "5-2.cpp",
            content: `//6810210052 Jiratti Jingbumrung
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
`
          }
        },
        {
          id: "l5-3",
          title: "โจทย์ข้อ 5-3",
          description: "โปรแกรมร้านขายดอกไม้",
          question: {
            text: "จงเขียนโปรแกรมเมนูร้านขายดอกไม้ คำนวณราคารวมและภาษี ตามเงื่อนไขในภาพ",
            type: "image",
            imageSrc: "/assets/q/5-3.png",
          },
          answer: {
            title: "โค้ดเฉลย (Solution)",
            language: "cpp",
            fileName: "5-3.cpp",
            content: `#include <iostream>

using namespace std;

int main()
{
    float cost=0, tax;
    int choice=0;
    while(choice!=7)
    {
       cout<<"Menu\\n1. Rose 19 baht\\n2. Lily 25 baht\\n3. Daisy 22 baht\\n4. Lotus 10 baht\\n5. Orchid 15 baht\\n6. Tulip 30 baht\\n7. End\\n\\nChoice:";
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
   cout<<"\\n\\n\\nTotal before tax: "<<cost;
   cout<<"\\ntax: "<<tax;
   cost += tax;
   cout<<"\\nTotal after tax: "<<cost;



    return 0;
}
`
          }
        }
      ]
    },
    {
      id: "m6",
      title: "บทที่ 6: อาเรย์ (Array)",
      pdfSrc: "/assets/r/6.Lecture6-2567.pdf",
      lessons: [
        {
          id: "l6-1",
          title: "Std Score",
          description: "การจัดการข้อมูลนักเรียน",
          question: {
            text: "จงเขียนโปรแกรมรับค่าคะแนนสอบ 3 วิชาของนักเรียน 10 คน แล้วคำนวณเกรดเฉลี่ย (ตามเอกสาร AssignmentArray)",
            type: "text",
          },
          answer: {
            title: "เฉลยโค้ด (Solution)",
            language: "cpp",
            fileName: "std_score.cpp",
            content: `#include <iostream>
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
`
          }
        }
      ]
    }
  ]
};

