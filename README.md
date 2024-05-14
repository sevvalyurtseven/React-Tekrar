# React-Tekrar

React, Facebook tarafından geliştirilmiş ve ilk olarak 2013 yılında kullanıma sunulmuş bir JavaScript kütüphanesidir. Web uygulamalarında kullanıcı arayüzlerini inşa etmek için kullanılır. React'ın ortaya çıkış amacı, büyük ve dinamik kullanıcı arayüzlerinin daha kolay yönetilmesini sağlamak ve performansı artırmaktır. Bunun için "re-render" (yeniden render etme) işlemini sadece gerekli olan bileşenler için yapacak şekilde optimize eder.

## React Mantığı ve Çözdüğü Sorunlar

React'ın temel mantığı, kullanıcı arayüzünü bağımsız bileşenler halinde tasarlamaktır. Her bileşen kendi içinde kapsüllenmiş ve yeniden kullanılabilir olacak şekilde düzenlenir. Bu bileşenler, birbirleriyle props (özellikler) aracılığıyla iletişim kurar. React'ın en önemli özelliklerinden biri olan sanal DOM (Document Object Model), gerçek DOM ile sürekli senkronize bir şekilde çalışır. Sanal DOM, DOM'un hafif bir kopyasıdır ve herhangi bir değişiklik olduğunda, React bu sanal DOM'da değişiklikleri hızlıca yapar ve ardından gerçek DOM ile sanal DOM arasındaki farkları hesaplayarak, sadece gerçekten değişen kısımları günceller. Bu, büyük uygulamalarda performansı önemli ölçüde artırır.

## React Component Nasıl Yazılır

React bileşeni, fonksiyonel veya sınıf bazlı olabilir. İşte basit bir fonksiyonel bileşen örneği:

```javascript
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Bu bileşen, props adında bir parametre alır ve bu parametre üzerinden gelen name değerini kullanarak bir başlık (h1) elementi render eder.

## State Nasıl Tanımlanır

React'te, bileşenin durumunu (state) yönetmek için useState hook'u kullanılır. İşte bir örnek

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

Bu örnekte, count adında bir state değişkeni tanımlanmış ve başlangıç değeri olarak 0 atanmıştır. setCount ise bu state'i güncellemek için kullanılır.

# State Kullanım Zamanları

## Ne Zaman State Kullanılmalı

Dinamik veri içeren ve zaman içinde değişebilecek verileri yönetmek için state kullanılmalıdır.

Kullanıcı girişleri, zaman sayacı, aç/kapa durumları gibi etkileşimli arayüz ögeleri için state gerekir.

## Ne Zaman State Kullanılmamalı

Sabit veriler veya bileşenler arası iletilen veriler (props ile gelen veriler) için state kullanılmasına gerek yoktur.

Eğer bir veri üzerinde herhangi bir etkileşimde bulunulmayacaksa veya veri sadece gösterim amaçlı ise state kullanmak gereksizdir. Bu durumda veri, props aracılığıyla iletilmelidir.

React, modüler yapı ve verimli güncellemeler sayesinde günümüz web geliştirme dünyasında oldukça popüler ve etkili bir çözüm sunar.

## Ek Bilgiler

1-) setter'lar asenkron calısır.

2-) state degistigi zaman component Virtual DOM'da komple yeniden render olur fakat ekrana sadece degisikliği yansıtır.

3-) useState hooku, bir bileşen içinde değişkenlerin durumunu tutmanızı sağlar ve bu durum değiştiğinde bileşenin otomatik olarak yeniden render edilmesine olanak tanır.

## ÖNEMLİ: herşey için state yaratmaya gerek yok bazı durumlar tek bir state'den yönetilebilir!
