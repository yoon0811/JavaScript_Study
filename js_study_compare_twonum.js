#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    int answer = 0;    
    if ((0 <= num1 <= 10000) && (0 <= num2 <= 10000)){}
        if (num1 == num2) {
            answer = 1;
            return answer;
        } else {
        answer = -1;
        return answer;
    };
};
    
        