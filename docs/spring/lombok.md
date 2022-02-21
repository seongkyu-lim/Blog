---
sidebar_position: 1
title: Lombok
---

> Lombok 이란 **Java의 라이브러리**로 반복되는 메소드를 **Annotation**을 사용해서 자동으로 작성해주는 라이브러리입니다.
>

### @Getter, @Setter

필드에 대해 getter와 setter 메소드를 자동으로 생성해주는 어노테이션입니다.

### @Data

@Getter, @Setter, @ToString, @EqualsAndHashcode, @RequiredArgsConstructor, @Value를 포함하는 어노테이션입니다.

→ @RequiredArgsConstructor는 따로 사용해줘야한다. 왜지 ?

### @ToString

@ToString 이 붙은 클래스는 Lombok이 toString() 메소드를 생성해줍니다. 기본적으로 필드를 ‘,’로 구분하여 출력해줍니다.

### @EqualsAndHashcode

@EqualsAndHashcode를 사용하면 lombok이 equals와 hashcode()를 만들어줍니다.

### @NoArgsConstructor

인자를 가지지 않는 생성자를 자동으로 생성해 줍니다.

→ 자바의 클래스는 인자를 가지지 않는 생성자를 자동으로 생성해 줄텐데 어노테이션이 왜 따로 존재하나 ?

### @AllArgsConstructor

모든 필드를 인자로 가지는 생성자를 자동으로 생성해 줍니다.

### @RequiredArgsConstructor

final키워드가 붙거나,  @NonNull이 붙은 필드를 인자로 가지는 생성자를 자동으로 생성해줍니다.

### @Slf4j

자바 로깅API를 제공합니다.