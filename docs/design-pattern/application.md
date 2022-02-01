---
sidebar_position: 5
title: How is the design pattern actually applied?
---

## Review

- **Creational patterns** : provide object creation mechanisms that increase flexibility and reuse of existing code.(객체의 **생성 방식** 결정)
- **Structural patterns** explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.(객체간의 **관계**를 조직)
- **Behavioral patterns** take care of effective communication and the assignment of responsibilities between objects.(객체의 **행위**를 조직, 관리, 연합)

---

**Creational pattern**

- provide object creation mechanisms that increase flexibility and reuse of existing code.

abstract factory

- 많은 수의 연관된 서브 클래스를 특정 그룹으로 묶어 한번에 교체할 수 있도록 만들었다.

factory method

- 객체를 만들어 반환하는 함수를 (생성자 대신) 제공하여 초기화 과정을 외부에서 보지 못하게 숨기고 반환 타입을 제어하는 방법.

builder

- 빌더 클래스는 인스턴스를 생성자를 통해 직접 생성하지 않고, 빌더라는 내부 클래스를 통해 간접적으로 생성하게 하는 패턴이다.
- **Builder** lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

singleton

- 키보드 리더, 프린터 스풀러, 점수기록표 등 클래스의 객체를 하나만 만들어야 하는 경우 사용한다. 클래스 내에서 인스턴스가 단 하나뿐임을 보장하므로, 프로그램 전역에서 해당 클래스의 인스턴스를 바로 얻을 수 있고, 불필요한 메모리 낭비를 최소화한다.
- **Singleton** lets you ensure that a class has only one instance, while providing a global access point to this instance.

---

**Structural pattern**

- explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.

adaptor

- **Adapter** allows objects with incompatible interfaces to collaborate.

composite

- Composite lets you compose objects into tree structures and then work with these structures as if they were individual objects.

facade

- 쉽게 설명하자면 복잡한 호출과정을 대신 처리해주는 wrapper 객체를 따로 만드는 것. 함수 호출 비용이 조금 들어가나 훨씬 쉽게 사용할 수 있다.

decorator

- **Decorator** lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

proxy

- 연산을 할 때 객체 스스로가 직접 처리하지 않고 중간에 다른 '숨겨진' 객체를 통해 처리하는 방법.(객체를 감싸는 객체)
- **Proxy** lets you provide a substitute or placeholder for another object.

---

**Behavioral pattern**

- take care of effective communication and the assignment of responsibilities between objects.

command

- **Command** turns a request into a stand-alone object that contains all information about the request.

observer

- **Observer** lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

templete method

- 전체적인 레이아웃을 통일시키지만 상속받은 클래스가 유연성을 가질 수 있게 만드는 패턴.

Iterator

- 객체 지향 언어에서 가장 접하기 쉬운 패턴.
- **Iterator** lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

CoR

- **Chain of Responsibility** lets you pass requests along a chain of handlers.

---

## Design Pattern in Spring

1. Singleton pattern


    spring은 객체 생성(bean)시 default가 singleton이다. 즉, 여러개의 객체를 생성하였을 때, 여러 객체들은 동일한 인스턴스를 가리킨다.
    
    객체들의 범위를 제한하거나 분리 시키기 위해서는 @Scope 어노테이션을 사용한다.
    
    For example, we can create two controllers within a single application context and inject a bean of the same type into each.
    
    ![스크린샷 2022-01-12 오후 8.44.58.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.44.58.png)
    
    ![스크린샷 2022-01-12 오후 8.45.10.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.45.10.png)
    
    We then start this application and perform a GET on */count* and */book/1:*
    
    ![스크린샷 2022-01-12 오후 8.46.53.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.46.53.png)
    
    ![스크린샷 2022-01-12 오후 8.45.45.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.45.45.png)
    
    The *BookRepository* object IDs in the *LibraryController* and *BookController* are the same, proving that Spring injected the same bean into both controllers.

2. Proxy pattern


    스프링의 AOP는 런타임시, 동적으로 객체들의 프록시 객체를 만들어주어 원래 객체에 대한 접근을 제어하고 싶거나, 부가 기능을 추가할 수 있게하고 기능별로 클래스를 모듈(aspect)화한다.
    
    In Spring, beans are proxied to control access to the underlying bean. We see this approach when using transactions.
    
    ![스크린샷 2022-01-12 오후 8.39.20.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.39.20.png)
    
    In our *BookManager* class, we annotate the *create* method with the *@Transactional* annotation. This annotation instructs Spring to atomically execute our *create* method. Without a proxy, Spring wouldn't be able to control access to our *BookRepository* bean and ensure its transactional consistency.

3. Template method pattern

   In many frameworks, a significant portion of the code is boilerplate code.

   For example, when executing a query on a database, the same series of steps must be completed:

    1. Establish a connection
    2. Execute query
    3. Perform cleanup
    4. Close the connection

   These steps are an ideal scenario for the [template method pattern](https://www.baeldung.com/java-template-method-pattern).

   JDBC를 사용할 때 사용되는 jdbc template, jpa를 사용할 때 사용되는 jpa template등은 모두 template metehod pattern로 구현되어있습니다.

   따라서 핵심 로직은 상위 클래스에 구현이 되어있으며, 구현체에 따라 db의 종류, 쿼리문법등을 다르게 하여 적용될 것임.


---

깨달음

1. OOP단점인 설계시 오랜시간이 걸리며 수정이 필요할 때 리스크가 크다.

   → 이것을 해결하기위해 디자인 패턴은 flexibility, reuse, efficient등을 강조.


---

- 참고자료

  [https://github.com/gyoogle/tech-interview-for-developer](https://github.com/gyoogle/tech-interview-for-developer)

  [Refactoring and Design Patterns](https://refactoring.guru/)

  [Design Patterns in the Spring Framework | Baeldung](https://www.baeldung.com/spring-framework-design-patterns)

  [](https://namu.wiki/w/%EB%94%94%EC%9E%90%EC%9D%B8%20%ED%8C%A8%ED%84%B4)
