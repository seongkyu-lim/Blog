---
sidebar_position: 1
title: NoteBook
---

### 2021.12.25

val → read-only

var → mutable

---

변수 출력 → ${변수 명}

---

expression 과 statement

---

코틀린은 파일 명과 클래스명이 달라도됨.

---

반복문

1..2 → 2 포함

1 until 2 → 2 포함 x

1..4 step 2 → 2개씩 건너뛰면서

kotlin에서 보통 ..을 사용하며 다른 언어와 다르게 마지막값을 포함한다.

---

index와 값을 같이 호출 가능.

ex)

students = arrayListOf(”kim”, “lim”, “lee”)

for ((idx, value) in arraylist.withIndex() ){

println(”${idx} and ${value}”)

}

---

?

nullable, nonnull → 타입+ ?

?:

엘비스 연산자 → [nullable한 변수 ?: “ㅇㄹㅇㄹ”] → null일 경우 “ “안의 값을 반환하고 null이 아닌 경우 변수의 값을 반환한다.

!!

.let

variable?.let{

prinln(”hello”)

}

→ variable이 null이 아닌경우 let안의 statement를 실행하라.

---

class

객체 생성시 자바와 달리 new 키워드 생략.

기본 생성자를 선언하는 방법 다름.

생성자를 사용하는 이유는 ? 존재 이유는 ?

init

클래스가 실행될 때 실행할 코드 블럭 선언

주생성자와 부생성자

inheritance(상속)

기본적으로 kotlin class는 final(재 할당 불가)이다. 따라서 상속을 하는 클래스는 open class로 해주어야한다.

extends대신 : 상위 클래스 명() → class Korean : Human() {}

java와 똑같이 클래스의 상속에서는 다중 상속 불가.

overriding

method도 마찬가지로 final이 default이기에 overriding하는 메소드는 open 추가.