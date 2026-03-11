import{c as R,b as ie,h as N,a as U,e as re,P as oe,o as I,R as se,a5 as le,T as B,s as D,d as M,C as ce,a6 as pe,a7 as V,M as ue,a8 as k,L as W,a9 as de,O as me,a2 as ye,aa as ge,ab as H,ac as we,ad as he,ae as ve,af as Q,ag as be,_ as fe,I as K,K as Z,ah as _,ai as ke,aj as ze,N as je,J as Ce,ak as ee,g as Se,al as ae,am as xe,an as Ne,ao as Te,ap as Ae,aq as Ee,ar as Le,as as Ie,at as Je,Y as F}from"./wwcq4ACT.js";function Ge(e,a){return a}function Pe(e,a,n){for(var s=[],i=a.length,c,r=a.length,y=0;y<i;y++){let h=a[y];Z(h,()=>{if(c){if(c.pending.delete(h),c.done.add(h),c.pending.size===0){var u=e.outrogroups;G(e,H(c.done)),u.delete(c),u.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=s.length===0&&n!==null;if(l){var m=n,o=m.parentNode;ze(o),o.append(m),e.items.clear()}G(e,a,!l)}else c={pending:new Set(a),done:new Set},(e.outrogroups??=new Set).add(c)}function G(e,a,n=!0){var s;if(e.pending.size>0){s=new Set;for(const r of e.pending.values())for(const y of r)s.add(e.items.get(y).e)}for(var i=0;i<a.length;i++){var c=a[i];if(s?.has(c)){c.f|=k;const r=document.createDocumentFragment();je(c,r)}else Ce(a[i],n)}}var Y;function He(e,a,n,s,i,c=null){var r=e,y=new Map,l=(a&ae)!==0;if(l){var m=e;r=N?U(re(m)):m.appendChild(R())}N&&oe();var o=null,h=ye(()=>{var d=n();return ge(d)?d:d==null?[]:H(d)}),u,v=new Map,b=!0;function T(d){(j.effect.f&fe)===0&&(j.pending.delete(d),j.fallback=o,qe(j,u,r,a,s),o!==null&&(u.length===0?(o.f&k)===0?K(o):(o.f^=k,P(o,null,r)):Z(o,()=>{o=null})))}function t(d){j.pending.delete(d)}var p=ie(()=>{u=I(h);var d=u.length;let w=!1;if(N){var q=se(r)===le;q!==(d===0)&&(r=B(),U(r),D(!1),w=!0)}for(var C=new Set,g=ue,E=me(),S=0;S<d;S+=1){N&&M.nodeType===ce&&M.data===pe&&(r=M,w=!0,D(!1));var f=u[S],O=s(f,S),z=b?null:y.get(O);z?(z.v&&V(z.v,f),z.i&&V(z.i,S),E&&g.unskip_effect(z.e)):(z=Oe(y,b?r:Y??=R(),f,O,S,i,a,n),b||(z.e.f|=k),y.set(O,z)),C.add(O)}if(d===0&&c&&!o&&(b?o=W(()=>c(r)):(o=W(()=>c(Y??=R())),o.f|=k)),d>C.size&&de(),N&&d>0&&U(B()),!b)if(v.set(g,C),E){for(const[te,ne]of y)C.has(te)||g.skip_effect(ne.e);g.oncommit(T),g.ondiscard(t)}else T(g);w&&D(!0),I(h)}),j={effect:p,items:y,pending:v,outrogroups:null,fallback:o};b=!1,N&&(r=M)}function J(e){for(;e!==null&&(e.f&ke)===0;)e=e.next;return e}function qe(e,a,n,s,i){var c=(s&xe)!==0,r=a.length,y=e.items,l=J(e.effect.first),m,o=null,h,u=[],v=[],b,T,t,p;if(c)for(p=0;p<r;p+=1)b=a[p],T=i(b,p),t=y.get(T).e,(t.f&k)===0&&(t.nodes?.a?.measure(),(h??=new Set).add(t));for(p=0;p<r;p+=1){if(b=a[p],T=i(b,p),t=y.get(T).e,e.outrogroups!==null)for(const f of e.outrogroups)f.pending.delete(t),f.done.delete(t);if((t.f&k)!==0)if(t.f^=k,t===l)P(t,null,n);else{var j=o?o.next:l;t===e.effect.last&&(e.effect.last=t.prev),t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),x(e,o,t),x(e,t,j),P(t,j,n),o=t,u=[],v=[],l=J(o.next);continue}if((t.f&_)!==0&&(K(t),c&&(t.nodes?.a?.unfix(),(h??=new Set).delete(t))),t!==l){if(m!==void 0&&m.has(t)){if(u.length<v.length){var d=v[0],w;o=d.prev;var q=u[0],C=u[u.length-1];for(w=0;w<u.length;w+=1)P(u[w],d,n);for(w=0;w<v.length;w+=1)m.delete(v[w]);x(e,q.prev,C.next),x(e,o,q),x(e,C,d),l=d,o=C,p-=1,u=[],v=[]}else m.delete(t),P(t,l,n),x(e,t.prev,t.next),x(e,t,o===null?e.effect.first:o.next),x(e,o,t),o=t;continue}for(u=[],v=[];l!==null&&l!==t;)(m??=new Set).add(l),v.push(l),l=J(l.next);if(l===null)continue}(t.f&k)===0&&u.push(t),o=t,l=J(t.next)}if(e.outrogroups!==null){for(const f of e.outrogroups)f.pending.size===0&&(G(e,H(f.done)),e.outrogroups?.delete(f));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||m!==void 0){var g=[];if(m!==void 0)for(t of m)(t.f&_)===0&&g.push(t);for(;l!==null;)(l.f&_)===0&&l!==e.fallback&&g.push(l),l=J(l.next);var E=g.length;if(E>0){var S=(s&ae)!==0&&r===0?n:null;if(c){for(p=0;p<E;p+=1)g[p].nodes?.a?.measure();for(p=0;p<E;p+=1)g[p].nodes?.a?.fix()}Pe(e,g,S)}}c&&ee(()=>{if(h!==void 0)for(t of h)t.nodes?.a?.apply()})}function Oe(e,a,n,s,i,c,r,y){var l=(r&we)!==0?(r&he)===0?ve(n,!1,!1):Q(n):null,m=(r&be)!==0?Q(i):null;return{v:l,i:m,e:W(()=>(c(a,l??n,m??i,y),()=>{e.delete(s)}))}}function P(e,a,n){if(e.nodes)for(var s=e.nodes.start,i=e.nodes.end,c=a&&(a.f&k)===0?a.nodes.start:n;s!==null;){var r=Se(s);if(c.before(s),s===i)return;s=r}}function x(e,a,n){a===null?e.effect.first=n:a.next=n,n===null?e.effect.last=a:n.prev=a}const Me=Symbol("is custom element"),Re=Symbol("is html"),Ue=Ee?"link":"LINK";function Be(e){if(N){var a=!1,n=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;$(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;$(e,"checked",null),e.checked=i}}};e.__on_r=n,ee(n),Ie()}}function $(e,a,n,s){var i=De(e);N&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName===Ue)||i[a]!==(i[a]=n)&&(a==="loading"&&(e[Te]=n),n==null?e.removeAttribute(a):typeof n!="string"&&_e(e).includes(a)?e[a]=n:e.setAttribute(a,n))}function De(e){return e.__attributes??={[Me]:e.nodeName.includes("-"),[Re]:e.namespaceURI===Ne}}var X=new Map;function _e(e){var a=e.getAttribute("is")||e.nodeName,n=X.get(a);if(n)return n;X.set(a,n=[]);for(var s,i=e,c=Element.prototype;c!==i;){s=Le(i);for(var r in s)s[r].set&&n.push(r);i=Ae(i)}return n}const We={"site.title":{en:"C# Evolution Explorer",pl:"Eksplorator Ewolucji C#"},"site.description":{en:"Explore every C# version and its features — with code examples and Java comparisons.",pl:"Poznaj każdą wersję C# i jej możliwości — z przykładami kodu i porównaniami z Javą."},"nav.home":{en:"Home",pl:"Start"},"nav.allVersions":{en:"All Versions",pl:"Wszystkie wersje"},"hero.title":{en:"The Evolution of C#",pl:"Ewolucja języka C#"},"hero.subtitle":{en:"From 1.0 to 13 — every feature, explained with code.",pl:"Od 1.0 do 13 — każda funkcja języka wyjaśniona kodem."},"hero.cta":{en:"Start Exploring",pl:"Zacznij odkrywać"},"version.features":{en:"Features",pl:"Funkcje języka"},"version.prev":{en:"Previous",pl:"Poprzednia"},"version.next":{en:"Next",pl:"Następna"},"feature.rationale":{en:"Why it was added",pl:"Dlaczego dodano"},"feature.example":{en:"C# Example",pl:"Przykład C#"},"feature.javaComparison":{en:"Java Equivalent",pl:"Odpowiednik w Javie"},"feature.showJava":{en:"Show Java comparison",pl:"Pokaż porównanie z Javą"},"feature.hideJava":{en:"Hide Java comparison",pl:"Ukryj porównanie z Javą"},"feature.tip":{en:"Tip for Java developers",pl:"Wskazówka dla programistów Javy"},"search.placeholder":{en:"Search features...",pl:"Szukaj funkcji..."},"search.noResults":{en:"No features found.",pl:"Nie znaleziono funkcji."},"theme.toggle":{en:"Toggle dark mode",pl:"Przełącz tryb ciemny"},"lang.switch":{en:"PL",pl:"EN"},"lang.switchLabel":{en:"Switch to Polish",pl:"Przełącz na angielski"},"timeline.title":{en:"Version Timeline",pl:"Oś czasu wersji"},"timeline.features":{en:"features",pl:"funkcji"},"footer.description":{en:"A reference for developers learning C# from other languages.",pl:"Kompendium dla programistów uczących się C# z innych języków."},skipLink:{en:"Skip to main content",pl:"Przejdź do treści głównej"},"category.syntax":{en:"Syntax",pl:"Składnia"},"category.types":{en:"Types",pl:"Typy"},"category.async":{en:"Async",pl:"Asynchroniczność"},"category.linq":{en:"LINQ",pl:"LINQ"},"category.pattern-matching":{en:"Pattern Matching",pl:"Dopasowanie wzorców"},"category.performance":{en:"Performance",pl:"Wydajność"},"category.records":{en:"Records",pl:"Rekordy"},"category.other":{en:"Other",pl:"Inne"}};let A=Je("en");function Ve(){return I(A)}function Qe(e){F(A,e,!0),typeof document<"u"&&(document.documentElement.lang=e,localStorage.setItem("locale",e))}function Ye(){if(typeof window<"u"){const e=localStorage.getItem("locale");e==="en"||e==="pl"?F(A,e,!0):navigator.language.startsWith("pl")&&F(A,"pl"),document.documentElement.lang=I(A)}}function $e(e){return e[I(A)]}function Xe(e){const a=We[e];return a?a[I(A)]:e}const L=[{id:"csharp-1",version:"1.0",dotnetVersion:".NET 1.0",year:2002,tagline:{en:"The Foundation",pl:"Fundament"},features:[{name:"Classes & Inheritance",slug:"classes-inheritance",category:"types",summary:{en:"C# launched as a strongly-typed, object-oriented language with single inheritance and interface implementation.",pl:"C# został zaprojektowany jako silnie typowany język obiektowy z pojedynczym dziedziczeniem i implementacją interfejsów."},rationale:{en:"Provide a clean, modern OOP model inspired by C++ and Java, but with simpler rules — single class inheritance avoids the diamond problem.",pl:"Dostarczenie czystego, nowoczesnego modelu OOP inspirowanego C++ i Java, ale z prostszymi regułami — pojedyncze dziedziczenie eliminuje problem diamentu."},csharpCode:`public class Animal
{
    public string Name { get; set; }

    public virtual string Speak()
        => "...";
}

public class Dog : Animal
{
    public override string Speak()
        => "Woof!";
}`,javaEquivalent:`public class Animal {
    private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String speak() {
        return "...";
    }
}

public class Dog extends Animal {
    @Override
    public String speak() {
        return "Woof!";
    }
}`,tip:{en:'C# uses ":" instead of "extends". Properties replace getter/setter boilerplate from day one.',pl:'C# używa ":" zamiast "extends". Właściwości (properties) zastępują boilerplate getter/setter od początku.'}},{name:"Delegates & Events",slug:"delegates-events",category:"types",summary:{en:"Type-safe function pointers (delegates) and a built-in event system for the observer pattern.",pl:"Bezpieczne typowo wskaźniki do funkcji (delegaty) i wbudowany system zdarzeń do wzorca obserwatora."},rationale:{en:"Enable type-safe callbacks without creating single-method interfaces. Events provide a first-class observer pattern built into the language.",pl:"Umożliwienie bezpiecznych typowo callbacków bez tworzenia interfejsów z jedną metodą. Zdarzenia dostarczają wbudowany wzorzec obserwatora."},csharpCode:`// Delegate = type-safe function reference
public delegate void Notify(string message);

public class Button
{
    public event EventHandler? Clicked;

    public void Press()
        => Clicked?.Invoke(this, EventArgs.Empty);
}

// Usage
var btn = new Button();
btn.Clicked += (sender, e) => Console.WriteLine("Clicked!");
btn.Press();`,javaEquivalent:`// Java uses functional interfaces (since Java 8)
@FunctionalInterface
public interface Notify {
    void send(String message);
}

// No built-in event system — use listeners
public class Button {
    private List<ActionListener> listeners = new ArrayList<>();

    public void addClickListener(ActionListener l) {
        listeners.add(l);
    }

    public void press() {
        listeners.forEach(l -> l.actionPerformed(null));
    }
}`,tip:{en:"C# events are like Java listeners but built into the language with += and -= syntax. No need for addXxxListener methods.",pl:"Zdarzenia C# są jak listenery w Java, ale wbudowane w język ze składnią += i -=. Nie potrzeba metod addXxxListener."}},{name:"Properties",slug:"properties",category:"syntax",summary:{en:"First-class property syntax with get/set accessors replaces the Java getter/setter convention.",pl:"Składnia właściwości z akcesorami get/set zastępuje konwencję getter/setter z Javy."},rationale:{en:"Reduce boilerplate. Fields that need controlled access should look like fields, not method calls.",pl:"Redukcja boilerplate. Pola wymagające kontrolowanego dostępu powinny wyglądać jak pola, nie jak wywołania metod."},csharpCode:`public class Person
{
    private string name;

    public string Name
    {
        get => name;
        set => name = value ?? throw new ArgumentNullException();
    }

    // Auto-property — compiler generates the backing field
    public int Age { get; set; }
}

var p = new Person { Name = "Anna", Age = 30 };
Console.WriteLine(p.Name); // looks like a field`,javaEquivalent:`public class Person {
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) {
        if (name == null) throw new IllegalArgumentException();
        this.name = name;
    }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

Person p = new Person();
p.setName("Anna");
p.setAge(30);
System.out.println(p.getName());`,tip:{en:`In C#, "p.Name" can hide complex logic behind the scenes — always check if it's an auto-property or has custom logic.`,pl:'W C# "p.Name" może ukrywać złożoną logikę — zawsze sprawdź, czy to auto-property czy ma własną logikę.'}},{name:"Structs (Value Types)",slug:"structs",category:"types",summary:{en:"Lightweight value types allocated on the stack, ideal for small data structures.",pl:"Lekkie typy wartościowe alokowane na stosie, idealne dla małych struktur danych."},rationale:{en:"Not everything should live on the heap. Structs give developers control over memory layout and avoid GC pressure for small, frequently-used types.",pl:"Nie wszystko powinno żyć na stercie. Struktury dają kontrolę nad układem pamięci i unikają presji GC dla małych, często używanych typów."},csharpCode:`public struct Point
{
    public double X { get; }
    public double Y { get; }

    public Point(double x, double y)
    {
        X = x;
        Y = y;
    }

    public double DistanceTo(Point other)
        => Math.Sqrt(Math.Pow(X - other.X, 2) + Math.Pow(Y - other.Y, 2));
}

// Allocated on the stack — no heap allocation, no GC
var p1 = new Point(0, 0);
var p2 = new Point(3, 4);
Console.WriteLine(p1.DistanceTo(p2)); // 5`,javaEquivalent:`// Java has no structs — everything is a reference type (until Project Valhalla)
// Closest equivalent: a final class or record (Java 16+)
public record Point(double x, double y) {
    public double distanceTo(Point other) {
        return Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
    }
}

// Always allocated on the heap
var p1 = new Point(0, 0);
var p2 = new Point(3, 4);
System.out.println(p1.distanceTo(p2)); // 5`,tip:{en:"Unlike Java, C# distinguishes between value types (struct) and reference types (class). Structs are copied by value and live on the stack.",pl:"W odróżnieniu od Java, C# rozróżniał typy wartościowe (struct) i referencyjne (class). Struktury są kopiowane przez wartość i żyją na stosie."}}]},{id:"csharp-2",version:"2.0",dotnetVersion:".NET 2.0",year:2005,tagline:{en:"The Generics Revolution",pl:"Rewolucja generyków"},features:[{name:"Generics",slug:"generics",category:"types",summary:{en:"Type-safe generic classes, methods, and interfaces — without boxing or runtime casts.",pl:"Bezpieczne typowo klasy, metody i interfejsy generyczne — bez boxingu i rzutowań w runtime."},rationale:{en:"Before generics, collections used object and required casting. Generics provide compile-time safety and better performance through reification.",pl:"Przed generykami kolekcje używały object i wymagały rzutowań. Generyki zapewniają bezpieczeństwo typów w kompilacji i lepszą wydajność dzięki reifikacji."},csharpCode:`// Generic class
public class Stack<T>
{
    private readonly List<T> items = new();

    public void Push(T item) => items.Add(item);
    public T Pop()
    {
        var item = items[^1];
        items.RemoveAt(items.Count - 1);
        return item;
    }
}

// Generic method with constraint
public T Max<T>(T a, T b) where T : IComparable<T>
    => a.CompareTo(b) >= 0 ? a : b;

var stack = new Stack<int>();
stack.Push(42);
int value = stack.Pop(); // no cast needed`,javaEquivalent:`// Java generics use type erasure — type info lost at runtime
public class Stack<T> {
    private final List<T> items = new ArrayList<>();

    public void push(T item) { items.add(item); }
    public T pop() {
        return items.remove(items.size() - 1);
    }
}

// Bounded type parameter
public <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

Stack<Integer> stack = new Stack<>(); // int autoboxed
stack.push(42);
int value = stack.pop();`,tip:{en:`C# generics are reified (preserved at runtime), unlike Java's type erasure. You can use typeof(T) and create T instances. "where" replaces "extends" in constraints.`,pl:'Generyki C# są reifikowane (zachowane w runtime), w przeciwieństwie do type erasure Java. Można użyć typeof(T) i tworzyć instancje T. "where" zastępuje "extends" w ograniczeniach.'}},{name:"Nullable Value Types",slug:"nullable-types",category:"types",summary:{en:"Value types can now be null using T? syntax, bridging the gap between value and reference types.",pl:"Typy wartościowe mogą teraz być null dzięki składni T?, łącze między typami wartościowymi i referencyjnymi."},rationale:{en:'Databases and many APIs need to represent "no value" for value types like int. Without nullable, developers resorted to magic values like -1.',pl:'Bazy danych i wiele API musi reprezentować "brak wartości" dla typów wartościowych. Bez nullable programiści używali magicznych wartości jak -1.'},csharpCode:`int? age = null; // Nullable<int>

if (age.HasValue)
    Console.WriteLine(age.Value);
else
    Console.WriteLine("Unknown age");

// Null-coalescing operator
int displayAge = age ?? 0;

// From database
int? score = GetScoreFromDb(); // might be NULL in DB
int finalScore = score ?? 100;`,javaEquivalent:`// Java uses wrapper types for nullable primitives
Integer age = null; // wrapper type, not primitive

if (age != null)
    System.out.println(age);
else
    System.out.println("Unknown age");

// Java equivalent of ?? (since Java 9)
int displayAge = Objects.requireNonNullElse(age, 0);

// Or with Optional (Java 8+)
OptionalInt score = getScoreFromDb();
int finalScore = score.orElse(100);`,tip:{en:"C# int? is syntactic sugar for Nullable<int>. The ?? operator is much more concise than Java's Optional or ternary checks.",pl:"C# int? to cukier składniowy dla Nullable<int>. Operator ?? jest dużo bardziej zwięzły niż Optional czy kontrole ternarne w Java."}},{name:"Iterators (yield)",slug:"iterators-yield",category:"syntax",summary:{en:"Generate sequences lazily using yield return — the compiler builds a state machine for you.",pl:"Generowanie sekwencji leniwie za pomocą yield return — kompilator buduje maszynę stanów za Ciebie."},rationale:{en:"Implementing IEnumerable manually required a lot of boilerplate. yield lets you write natural-looking code that the compiler transforms into a lazy iterator.",pl:"Ręczna implementacja IEnumerable wymagała dużo boilerplate. yield pozwala pisać naturalny kod, który kompilator transformuje w leniwy iterator."},csharpCode:`// Lazy Fibonacci sequence — values computed on demand
public static IEnumerable<int> Fibonacci()
{
    int a = 0, b = 1;
    while (true)
    {
        yield return a;
        (a, b) = (b, a + b);
    }
}

// Take only first 10 numbers
foreach (var n in Fibonacci().Take(10))
    Console.Write($"{n} ");
// Output: 0 1 1 2 3 5 8 13 21 34`,javaEquivalent:`// Java has no yield — must use Stream or custom Iterator
public static Stream<Integer> fibonacci() {
    return Stream.iterate(
        new int[]{0, 1},
        f -> new int[]{f[1], f[0] + f[1]}
    ).map(f -> f[0]);
}

fibonacci().limit(10)
    .forEach(n -> System.out.print(n + " "));`,tip:{en:"yield return is unique to C# — it pauses the method and resumes on the next iteration. Java has no direct equivalent; closest is Stream.iterate.",pl:"yield return jest unikalne dla C# — wstrzymuje metodę i wznawia przy kolejnej iteracji. Java nie ma bezpośredniego odpowiednika; najbliższy to Stream.iterate."}},{name:"Anonymous Methods",slug:"anonymous-methods",category:"syntax",summary:{en:"Inline delegate definitions using the delegate keyword — a precursor to lambda expressions.",pl:"Definicje delegatów inline za pomocą słowa kluczowego delegate — prekursor wyrażeń lambda."},rationale:{en:"Defining a named method just to pass it as a callback was verbose. Anonymous methods allow inline delegate logic.",pl:"Definiowanie nazwanej metody tylko po to, by przekazać ją jako callback, było rozwlekłe. Metody anonimowe pozwalają na logikę delegatów inline."},csharpCode:`var numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

// Anonymous method (C# 2.0 style)
var evens = numbers.FindAll(delegate(int n)
{
    return n % 2 == 0;
});

// Later replaced by lambda (C# 3.0):
// var evens = numbers.FindAll(n => n % 2 == 0);

button.Click += delegate(object sender, EventArgs e)
{
    Console.WriteLine("Clicked");
};`,javaEquivalent:`List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);

// Java anonymous class (pre-Java 8)
List<Integer> evens = numbers.stream()
    .filter(new Predicate<Integer>() {
        @Override
        public boolean test(Integer n) {
            return n % 2 == 0;
        }
    })
    .collect(Collectors.toList());`,tip:{en:"Anonymous methods were C# 2.0's answer to Java's anonymous inner classes, but much more concise. Both languages later got lambdas.",pl:"Metody anonimowe C# 2.0 były odpowiedzią na anonimowe klasy wewnętrzne Java, ale dużo bardziej zwięzłe. Oba języki później dostały lambdy."}}]},{id:"csharp-3",version:"3.0",dotnetVersion:".NET 3.5",year:2007,tagline:{en:"LINQ & Functional Style",pl:"LINQ i styl funkcyjny"},features:[{name:"LINQ",slug:"linq",category:"linq",summary:{en:"Language-Integrated Query — SQL-like syntax for querying any data source directly in C#.",pl:"Language-Integrated Query — składnia podobna do SQL do odpytywania dowolnych źródeł danych bezpośrednio w C#."},rationale:{en:"Querying data required different APIs for different sources (SQL, XML, objects). LINQ unifies them all with a single, type-safe syntax integrated into the language.",pl:"Odpytywanie danych wymagało różnych API dla różnych źródeł (SQL, XML, obiekty). LINQ unifikuje je wszystkie jedną bezpieczną typowo składnią wbudowaną w język."},csharpCode:`var people = new List<Person>
{
    new("Alice", 30), new("Bob", 25),
    new("Charlie", 35), new("Diana", 28)
};

// Query syntax
var seniors = from p in people
              where p.Age >= 30
              orderby p.Name
              select p.Name;

// Method syntax (equivalent)
var seniors2 = people
    .Where(p => p.Age >= 30)
    .OrderBy(p => p.Name)
    .Select(p => p.Name);

// Works with any IEnumerable<T> — files, XML, databases...`,javaEquivalent:`List<Person> people = List.of(
    new Person("Alice", 30), new Person("Bob", 25),
    new Person("Charlie", 35), new Person("Diana", 28)
);

// Java Streams (Java 8+)
List<String> seniors = people.stream()
    .filter(p -> p.age() >= 30)
    .sorted(Comparator.comparing(Person::name))
    .map(Person::name)
    .collect(Collectors.toList());`,tip:{en:"LINQ is similar to Java Streams but with two syntax options (query and method). LINQ is lazy by default and works across different data providers.",pl:"LINQ jest podobne do Java Streams, ale z dwoma opcjami składni (zapytaniowa i metodowa). LINQ jest leniwe domyślnie i działa z różnymi dostawcami danych."}},{name:"Lambda Expressions",slug:"lambda-expressions",category:"syntax",summary:{en:"Concise anonymous function syntax using the => operator.",pl:"Zwięzła składnia funkcji anonimowych za pomocą operatora =>."},rationale:{en:"Anonymous methods (C# 2.0) were still verbose. Lambdas provide minimal syntax for inline functions, essential for LINQ.",pl:"Metody anonimowe (C# 2.0) wciąż były rozwlekłe. Lambdy zapewniają minimalną składnię dla funkcji inline, niezbędną dla LINQ."},csharpCode:`// Expression lambda
Func<int, int> square = x => x * x;

// Statement lambda
Func<int, int, int> max = (a, b) =>
{
    if (a >= b) return a;
    return b;
};

// With LINQ
var names = people
    .Where(p => p.Age > 18)
    .Select(p => p.Name.ToUpper());

// As event handlers
button.Click += (s, e) => Console.WriteLine("Clicked");`,javaEquivalent:`// Java lambda (Java 8+)
Function<Integer, Integer> square = x -> x * x;

// Java needs BiFunction or custom interface
BiFunction<Integer, Integer, Integer> max = (a, b) -> {
    if (a >= b) return a;
    return b;
};

// With Streams
var names = people.stream()
    .filter(p -> p.getAge() > 18)
    .map(p -> p.getName().toUpperCase())
    .collect(Collectors.toList());`,tip:{en:"C# uses => (fat arrow), Java uses -> (thin arrow). C# lambdas work with delegates (Func, Action), Java uses functional interfaces.",pl:"C# używa => (gruba strzałka), Java używa -> (cienka strzałka). Lambdy C# pracują z delegatami (Func, Action), Java używa interfejsów funkcyjnych."}},{name:"Extension Methods",slug:"extension-methods",category:"syntax",summary:{en:"Add methods to existing types without modifying them — the backbone of LINQ.",pl:"Dodawanie metod do istniejących typów bez ich modyfikowania — kręgosłup LINQ."},rationale:{en:`You can't always modify a class (sealed, third-party). Extension methods let you "add" methods to any type, enabling fluent APIs like LINQ.`,pl:'Nie zawsze można zmodyfikować klasę (sealed, third-party). Metody rozszerzające pozwalają "dodać" metody do dowolnego typu, umożliwiając fluent API jak LINQ.'},csharpCode:`public static class StringExtensions
{
    public static string Reverse(this string str)
        => new string(str.ToCharArray().Reverse().ToArray());

    public static bool IsNullOrEmpty(this string? str)
        => string.IsNullOrEmpty(str);
}

// Usage — looks like a built-in method
string hello = "Hello";
string reversed = hello.Reverse(); // "olleH"

if (!hello.IsNullOrEmpty())
    Console.WriteLine(reversed);`,javaEquivalent:`// Java has no extension methods — use static utility classes
public class StringUtils {
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static boolean isNullOrEmpty(String str) {
        return str == null || str.isEmpty();
    }
}

// Usage — utility class call
String hello = "Hello";
String reversed = StringUtils.reverse(hello);

if (!StringUtils.isNullOrEmpty(hello))
    System.out.println(reversed);`,tip:{en:'Extension methods are defined as static methods with "this" before the first parameter. They appear as instance methods via IntelliSense. Java has no equivalent.',pl:'Metody rozszerzające definiuje się jako metody statyczne z "this" przed pierwszym parametrem. Pojawiają się jako metody instancji w IntelliSense. Java nie ma odpowiednika.'}},{name:"var (Implicit Typing)",slug:"var-implicit-typing",category:"syntax",summary:{en:"Let the compiler infer the type from the right-hand side expression.",pl:"Kompilator sam ustala typ na podstawie wyrażenia po prawej stronie."},rationale:{en:"When the type is obvious from context (e.g. new List<string>()), repeating it is redundant noise. var reduces ceremony without losing type safety.",pl:"Gdy typ jest oczywisty z kontekstu (np. new List<string>()), jego powtarzanie to zbędny szum. var redukuje ceremonialność bez utraty bezpieczeństwa typów."},csharpCode:`// Compiler infers types — still strongly typed!
var name = "Alice";           // string
var numbers = new List<int>(); // List<int>
var lookup = new Dictionary<string, List<int>>(); // no need to repeat

// Essential for anonymous types
var person = new { Name = "Alice", Age = 30 };
Console.WriteLine(person.Name);

// var is compile-time only — the IL is identical to explicit typing`,javaEquivalent:`// Java added var in Java 10
var name = "Alice";
var numbers = new ArrayList<Integer>();
var lookup = new HashMap<String, List<Integer>>();

// Java has no anonymous types — use records instead
record Person(String name, int age) {}
var person = new Person("Alice", 30);`,tip:{en:"C# var (2007) predates Java var (2018) by 11 years. Both are compile-time only. C# also has anonymous types, which Java never added.",pl:"C# var (2007) wyprzedził Java var (2018) o 11 lat. Oba działają tylko w czasie kompilacji. C# ma też typy anonimowe, których Java nigdy nie dodała."}}]},{id:"csharp-4",version:"4.0",dotnetVersion:".NET 4.0",year:2010,tagline:{en:"Dynamic & Interop",pl:"Dynamiczność i interoperacyjność"},features:[{name:"dynamic Keyword",slug:"dynamic-keyword",category:"types",summary:{en:"Bypass compile-time type checking — method resolution happens at runtime via the DLR.",pl:"Pominięcie sprawdzania typów w kompilacji — rozwiązywanie metod odbywa się w runtime przez DLR."},rationale:{en:"Interop with COM, Python (IronPython), JavaScript, and reflection-heavy code required a way to defer type resolution to runtime.",pl:"Interop z COM, Python (IronPython), JavaScript i kodem intensywnie używającym refleksji wymagał sposobu na odroczenie rozwiązywania typów do runtime."},csharpCode:`// dynamic — type resolved at runtime
dynamic obj = "Hello, World!";
Console.WriteLine(obj.Length); // resolved at runtime

obj = 42;
Console.WriteLine(obj + 8); // 50

// Useful for COM interop, ExpandoObject, etc.
dynamic expando = new ExpandoObject();
expando.Name = "Alice";
expando.Greet = (Action)(() => Console.WriteLine($"Hi, {expando.Name}!"));
expando.Greet();`,javaEquivalent:`// Java has no dynamic keyword — use reflection or Object
Object obj = "Hello, World!";
System.out.println(((String) obj).length());

obj = 42;
System.out.println((int) obj + 8);

// Java needs explicit reflection for dynamic dispatch
Method method = obj.getClass().getMethod("toString");
method.invoke(obj);`,tip:{en:"dynamic is C#'s escape hatch from static typing. Use it sparingly — you lose IntelliSense and compile-time safety. Java uses reflection for similar cases.",pl:'dynamic to "drzwi ewakuacyjne" z typowania statycznego. Używaj oszczędnie — tracisz IntelliSense i bezpieczeństwo kompilacji. Java używa refleksji w podobnych przypadkach.'}},{name:"Named & Optional Arguments",slug:"named-optional-arguments",category:"syntax",summary:{en:"Specify parameter names at call site and define default values in method signatures.",pl:"Podawanie nazw parametrów w miejscu wywołania i definiowanie wartości domyślnych w sygnaturach metod."},rationale:{en:"Reduce the need for method overloads. Named arguments improve readability for methods with many boolean or similar-type parameters.",pl:"Zmniejszenie potrzeby przeciążeń metod. Nazwane argumenty poprawiają czytelność dla metod z wieloma parametrami boolean lub podobnego typu."},csharpCode:`public void CreateUser(
    string name,
    int age,
    string role = "User",     // optional with default
    bool active = true)       // optional with default
{
    // ...
}

// Named arguments — clear and readable
CreateUser("Alice", 30, role: "Admin");
CreateUser("Bob", 25, active: false);
CreateUser(age: 28, name: "Charlie"); // reorder with names`,javaEquivalent:`// Java has no named or optional parameters
// Must use overloads or builder pattern
public void createUser(String name, int age) {
    createUser(name, age, "User", true);
}
public void createUser(String name, int age, String role) {
    createUser(name, age, role, true);
}
public void createUser(String name, int age, String role, boolean active) {
    // ...
}

createUser("Alice", 30, "Admin", true);`,tip:{en:"C# optional params eliminate overload chains. Named args (name: value) make boolean parameters self-documenting. Java still relies on overloads or builders.",pl:"Opcjonalne parametry C# eliminują łańcuchy przeciążeń. Nazwane argumenty (name: value) samodokumentują parametry boolean. Java wciąż polega na przeciążeniach lub builderach."}},{name:"Generic Covariance & Contravariance",slug:"generic-variance",category:"types",summary:{en:"out and in keywords on generic type parameters enable safe type conversions for interfaces and delegates.",pl:"Słowa kluczowe out i in na parametrach typów generycznych umożliwiają bezpieczne konwersje typów dla interfejsów i delegatów."},rationale:{en:"IEnumerable<Dog> should be assignable to IEnumerable<Animal>. Variance annotations make this safe and explicit at the interface level.",pl:"IEnumerable<Dog> powinno być przypisywalne do IEnumerable<Animal>. Adnotacje wariancji czynią to bezpiecznym i jawnym na poziomie interfejsu."},csharpCode:`// Covariant (out) — can return T but not accept T
IEnumerable<Animal> animals = new List<Dog>(); // OK!

// Contravariant (in) — can accept T but not return T
Action<Animal> feedAnimal = animal => Console.WriteLine($"Feeding {animal.Name}");
Action<Dog> feedDog = feedAnimal; // OK!
feedDog(new Dog { Name = "Rex" });

// Custom variance
public interface IProducer<out T> { T Create(); }
public interface IConsumer<in T> { void Process(T item); }`,javaEquivalent:`// Java uses wildcards instead of declaration-site variance
List<? extends Animal> animals = new ArrayList<Dog>(); // covariant
// animals.add(new Dog()); // compile error — wildcards are use-site

// Java has no direct contravariance syntax for lambdas
Consumer<Animal> feedAnimal = a -> System.out.println("Feeding " + a.name);
Consumer<Dog> feedDog = feedAnimal::accept; // manual`,tip:{en:"C# uses declaration-site variance (out/in on interface), Java uses use-site wildcards (? extends/? super). C# approach is cleaner — define once, use everywhere.",pl:"C# używa wariancji deklarowanej (out/in na interfejsie), Java używa wildcardów (? extends/? super). Podejście C# jest czystsze — zdefiniuj raz, używaj wszędzie."}}]},{id:"csharp-5",version:"5.0",dotnetVersion:".NET 4.5",year:2012,tagline:{en:"The Async Revolution",pl:"Rewolucja asynchroniczna"},features:[{name:"async / await",slug:"async-await",category:"async",summary:{en:"Write asynchronous code that reads like synchronous code — the compiler handles the state machine.",pl:"Pisz kod asynchroniczny, który czyta się jak synchroniczny — kompilator obsługuje maszynę stanów."},rationale:{en:"Callback-based async code (Begin/End pattern, ContinueWith) was hard to read and maintain. async/await makes async code as readable as sync code.",pl:"Kod asynchroniczny oparty na callbackach (wzorzec Begin/End, ContinueWith) był trudny do czytania. async/await czyni kod asynchroniczny czytelnym jak synchroniczny."},csharpCode:`// Asynchronous method — returns Task<T>
public async Task<string> FetchDataAsync(string url)
{
    using var client = new HttpClient();
    var response = await client.GetAsync(url);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}

// Calling async code
var data = await FetchDataAsync("https://api.example.com/data");
Console.WriteLine(data);

// Parallel async operations
var task1 = FetchDataAsync("https://api.example.com/users");
var task2 = FetchDataAsync("https://api.example.com/posts");
var results = await Task.WhenAll(task1, task2);`,javaEquivalent:`// Java CompletableFuture (Java 8+)
public CompletableFuture<String> fetchDataAsync(String url) {
    return CompletableFuture.supplyAsync(() -> {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url)).build();
        return client.send(request, BodyHandlers.ofString()).body();
    });
}

// Chaining — more verbose than await
fetchDataAsync("https://api.example.com/data")
    .thenAccept(System.out::println);

// Parallel
CompletableFuture.allOf(
    fetchDataAsync("https://api.example.com/users"),
    fetchDataAsync("https://api.example.com/posts")
).join();`,tip:{en:"async/await (C# 5.0, 2012) predates Java's virtual threads and structured concurrency. It's much simpler than CompletableFuture chains.",pl:"async/await (C# 5.0, 2012) wyprzedził virtual threads i structured concurrency Java. Jest dużo prostsze niż łańcuchy CompletableFuture."}},{name:"Caller Info Attributes",slug:"caller-info",category:"other",summary:{en:"Automatically capture caller's file path, line number, and method name at compile time.",pl:"Automatyczne przechwycenie ścieżki pliku, numeru linii i nazwy metody wywołującego w kompilacji."},rationale:{en:"Logging and diagnostics often need to know where a method was called from. These attributes inject that info at compile time — zero runtime cost.",pl:"Logowanie i diagnostyka często potrzebują wiedzieć, skąd metoda została wywołana. Te atrybuty wstrzykują te informacje w kompilacji — zero kosztu runtime."},csharpCode:`using System.Runtime.CompilerServices;

public void Log(
    string message,
    [CallerMemberName] string member = "",
    [CallerFilePath] string file = "",
    [CallerLineNumber] int line = 0)
{
    Console.WriteLine($"[{file}:{line} {member}] {message}");
}

// Usage — compiler fills in the values!
Log("Something happened");
// Output: [Program.cs:42 Main] Something happened`,javaEquivalent:`// Java uses StackWalker (Java 9+) — runtime cost
public void log(String message) {
    StackWalker.getInstance().walk(frames -> {
        var caller = frames.skip(1).findFirst().orElseThrow();
        System.out.printf("[%s:%d %s] %s%n",
            caller.getFileName(),
            caller.getLineNumber(),
            caller.getMethodName(),
            message);
        return null;
    });
}`,tip:{en:"CallerInfo attributes resolve at compile-time with zero overhead. Java's StackWalker does the same at runtime, which is slower.",pl:"Atrybuty CallerInfo rozwiązują się w kompilacji bez narzutu. StackWalker Java robi to samo w runtime, co jest wolniejsze."}}]},{id:"csharp-6",version:"6.0",dotnetVersion:".NET 4.6",year:2015,tagline:{en:"Developer Productivity",pl:"Produktywność programisty"},features:[{name:"String Interpolation",slug:"string-interpolation",category:"syntax",summary:{en:"Embed expressions directly in strings using the $ prefix — cleaner than string.Format.",pl:"Osadzanie wyrażeń bezpośrednio w ciągach znaków za pomocą prefiksu $ — czystsze niż string.Format."},rationale:{en:"string.Format with numbered placeholders ({0}, {1}) was error-prone and hard to read. Interpolation puts the expression right where it appears.",pl:"string.Format z numerowanymi symbolami ({0}, {1}) było podatne na błędy i trudne do czytania. Interpolacja umieszcza wyrażenie tam, gdzie się pojawia."},csharpCode:`var name = "Alice";
var age = 30;

// String interpolation
var greeting = $"Hello, {name}! You are {age} years old.";

// Expressions inside braces
var message = $"In 5 years, {name} will be {age + 5}.";

// Format specifiers
var price = 42.5m;
var formatted = $"Price: {price:C2}"; // Price: $42.50

// Multi-line (with verbatim)
var json = $@"{{
    ""name"": ""{name}"",
    ""age"": {age}
}}";`,javaEquivalent:`var name = "Alice";
var age = 30;

// Java — String.format (verbose)
var greeting = String.format("Hello, %s! You are %d years old.", name, age);

// Java 21+ — STR template (preview)
// var greeting = STR."Hello, \\{name}! You are \\{age} years old.";

// Or concatenation
var message = "In 5 years, " + name + " will be " + (age + 5) + ".";`,tip:{en:`C# interpolation ($"...{expr}...") is more readable than Java's String.format. Java added string templates in Java 21 as a preview feature.`,pl:'Interpolacja C# ($"...{expr}...") jest bardziej czytelna niż String.format Java. Java dodała string templates w Java 21 jako preview.'}},{name:"Null-Conditional Operator",slug:"null-conditional",category:"syntax",summary:{en:"Safe navigation through potentially null references using ?. and ?[] operators.",pl:"Bezpieczna nawigacja przez potencjalnie nullowe referencje za pomocą operatorów ?. i ?[]."},rationale:{en:"Chained null checks (if x != null && x.Y != null && x.Y.Z != null) were verbose and error-prone. ?. short-circuits to null if any part is null.",pl:"Łańcuchy sprawdzeń null (if x != null && x.Y != null) były rozwlekłe i podatne na błędy. ?. zwraca null jeśli dowolna część jest null."},csharpCode:`// Null-conditional — short-circuits to null
string? city = person?.Address?.City;

// With array indexing
var first = people?[0]?.Name;

// With method calls
var length = name?.Length; // int? (nullable)

// Combined with null-coalescing
var display = person?.Name ?? "Unknown";

// Event invocation (thread-safe!)
Clicked?.Invoke(this, EventArgs.Empty);`,javaEquivalent:`// Java — must use Optional or nested null checks
String city = Optional.ofNullable(person)
    .map(Person::getAddress)
    .map(Address::getCity)
    .orElse(null);

// Or manual checks
String city2 = null;
if (person != null && person.getAddress() != null) {
    city2 = person.getAddress().getCity();
}

// Null-coalescing equivalent
String display = person != null && person.getName() != null
    ? person.getName() : "Unknown";`,tip:{en:"?. is one of C#'s most-loved features. Chaining ?. with ?? is a powerful pattern. Java's Optional is more verbose for the same use case.",pl:"?. to jedna z najbardziej lubianych funkcji C#. Łączenie ?. z ?? to potężny wzorzec. Optional Java jest bardziej rozwlekłe dla tego samego przypadku."}},{name:"Expression-Bodied Members",slug:"expression-bodied",category:"syntax",summary:{en:"Use => for concise one-line method, property, and operator bodies.",pl:"Użycie => dla zwięzłych jednolinijkowych ciał metod, właściwości i operatorów."},rationale:{en:"Many methods and properties are simple one-liners. The full { return ...; } syntax adds unnecessary noise.",pl:"Wiele metod i właściwości to proste jednolinijkowce. Pełna składnia { return ...; } dodaje niepotrzebny szum."},csharpCode:`public class Circle
{
    public double Radius { get; }

    public Circle(double radius) => Radius = radius;

    // Expression-bodied method
    public double Area => Math.PI * Radius * Radius;

    // Expression-bodied method
    public override string ToString() => $"Circle(r={Radius})";

    // Expression-bodied operator
    public static Circle operator +(Circle a, Circle b)
        => new Circle(a.Radius + b.Radius);
}`,javaEquivalent:`public class Circle {
    private final double radius;

    public Circle(double radius) { this.radius = radius; }

    public double getRadius() { return radius; }

    public double area() {
        return Math.PI * radius * radius;
    }

    @Override
    public String toString() {
        return "Circle(r=" + radius + ")";
    }
}`,tip:{en:"Expression-bodied members are purely syntactic sugar — they compile to the same IL. Use them for simple members to reduce visual clutter.",pl:"Expression-bodied members to czysty cukier składniowy — kompilują się do tego samego IL. Używaj ich dla prostych członków, by zmniejszyć szum wizualny."}},{name:"nameof Operator",slug:"nameof",category:"syntax",summary:{en:"Get the name of a variable, type, or member as a string at compile time.",pl:"Uzyskanie nazwy zmiennej, typu lub członka jako ciągu znaków w kompilacji."},rationale:{en:"Hard-coded strings for property names in INotifyPropertyChanged, argument validation, and logging break on rename. nameof stays in sync with refactoring.",pl:"Zakodowane nazwy właściwości w INotifyPropertyChanged, walidacji argumentów i logowaniu psują się przy refaktoryzacji. nameof synchronizuje się automatycznie."},csharpCode:`// Argument validation — refactor-safe
public void SetName(string name)
{
    if (string.IsNullOrEmpty(name))
        throw new ArgumentException("Cannot be empty", nameof(name));
}

// INotifyPropertyChanged
public string Name
{
    get => name;
    set { name = value; OnPropertyChanged(nameof(Name)); }
}

// Logging
Console.WriteLine($"Entering {nameof(SetName)}");`,javaEquivalent:`// Java has no nameof — strings must be hardcoded
public void setName(String name) {
    if (name == null || name.isEmpty())
        throw new IllegalArgumentException("Cannot be empty: name");
}

// Hardcoded strings — break on rename
firePropertyChange("name", oldName, name);

// Logging
System.out.println("Entering setName");`,tip:{en:"nameof is resolved at compile-time to a string literal. It's essential for refactoring safety. Java developers must rely on hardcoded strings.",pl:"nameof rozwiązuje się w kompilacji do literalu string. Jest niezbędne dla bezpieczeństwa refaktoryzacji. Programiści Java muszą polegać na zakodowanych ciągach."}}]},{id:"csharp-7",version:"7.0 - 7.3",dotnetVersion:".NET Core 2.x",year:2017,tagline:{en:"Modern Patterns & Tuples",pl:"Nowoczesne wzorce i krotki"},features:[{name:"Tuples & Deconstruction",slug:"tuples-deconstruction",category:"types",summary:{en:"Lightweight named tuples for returning multiple values, with deconstruction syntax.",pl:"Lekkie nazwane krotki do zwracania wielu wartości, ze składnią dekonstrukcji."},rationale:{en:"Returning multiple values required out parameters, custom classes, or Tuple<T1,T2> with .Item1 names. Named tuples are clear and lightweight.",pl:"Zwracanie wielu wartości wymagało parametrów out, własnych klas lub Tuple<T1,T2> z nazwami .Item1. Nazwane krotki są czytelne i lekkie."},csharpCode:`// Named tuple return type
public (string Name, int Age) GetPerson()
    => ("Alice", 30);

// Deconstruction
var (name, age) = GetPerson();
Console.WriteLine($"{name} is {age}");

// Tuple as parameter
public double Distance((double X, double Y) a, (double X, double Y) b)
    => Math.Sqrt(Math.Pow(a.X - b.X, 2) + Math.Pow(a.Y - b.Y, 2));

// Swap values
(a, b) = (b, a);`,javaEquivalent:`// Java has no built-in tuples — use records (Java 16+)
record PersonResult(String name, int age) {}

public PersonResult getPerson() {
    return new PersonResult("Alice", 30);
}

// No deconstruction syntax
var result = getPerson();
System.out.println(result.name() + " is " + result.age());`,tip:{en:"C# tuples are value types (ValueTuple) and support deconstruction with var (name, age) = .... Java uses records, which are heap-allocated classes.",pl:"Krotki C# są typami wartościowymi (ValueTuple) i wspierają dekonstrukcję z var (name, age) = .... Java używa recordow, które są alokowane na stercie."}},{name:"Pattern Matching (is & switch)",slug:"pattern-matching-v1",category:"pattern-matching",summary:{en:"Test values against patterns — type patterns, constant patterns, and var patterns in is and switch.",pl:"Testowanie wartości wobec wzorców — wzorce typów, stałych i var w is i switch."},rationale:{en:"Type checking + casting in separate steps was verbose. Pattern matching combines the test and cast in one expression.",pl:"Sprawdzanie typu + rzutowanie w osobnych krokach było rozwlekłe. Dopasowanie wzorców łączy test i rzutowanie w jednym wyrażeniu."},csharpCode:`// Type pattern with is
if (obj is string text)
    Console.WriteLine(text.ToUpper());

// Switch with patterns
string Describe(object obj) => obj switch
{
    int n when n > 0 => "positive integer",
    int n            => "non-positive integer",
    string s         => $"string of length {s.Length}",
    null             => "null",
    _                => "something else"
};

// Combined with tuples
string Classify(int x, int y) => (x, y) switch
{
    (0, 0) => "origin",
    (_, 0) => "on x-axis",
    (0, _) => "on y-axis",
    _      => "other"
};`,javaEquivalent:`// Java pattern matching (Java 16+ preview)
if (obj instanceof String text)
    System.out.println(text.toUpperCase());

// Java switch expressions (Java 14+)
String describe(Object obj) {
    return switch (obj) {
        case Integer n when n > 0 -> "positive integer";
        case Integer n -> "non-positive integer";
        case String s -> "string of length " + s.length();
        case null -> "null";
        default -> "something else";
    };
}`,tip:{en:"C# pattern matching (2017) predates Java's. The switch expression with tuples is a unique C# feature with no Java equivalent.",pl:"Dopasowanie wzorców C# (2017) wyprzedza to z Java. Wyrażenie switch z krotkami to unikalna funkcja C# bez odpowiednika w Java."}},{name:"Local Functions",slug:"local-functions",category:"syntax",summary:{en:"Declare helper functions inside another method — scoped, named, and support generics.",pl:"Deklarowanie funkcji pomocniczych wewnątrz innej metody — z zakresem, nazwa i wsparciem generyków."},rationale:{en:"Some helper logic is only relevant to a single method. Local functions are clearer than lambdas for recursive or multi-line helpers.",pl:"Część logiki pomocniczej jest istotna tylko dla jednej metody. Lokalne funkcje są czystsze niż lambdy dla rekurencyjnych lub wieloliniowych pomocników."},csharpCode:`public int Factorial(int n)
{
    if (n < 0)
        throw new ArgumentException("Must be non-negative", nameof(n));

    return Core(n);

    // Local function — only visible inside Factorial
    static int Core(int n)
    {
        if (n <= 1) return 1;
        return n * Core(n - 1);
    }
}

// Validation before iteration
public IEnumerable<int> Range(int start, int count)
{
    if (count < 0) throw new ArgumentException(nameof(count));
    return Generate();

    IEnumerable<int> Generate()
    {
        for (int i = 0; i < count; i++)
            yield return start + i;
    }
}`,javaEquivalent:`// Java has no local functions — use private methods or lambdas
public int factorial(int n) {
    if (n < 0) throw new IllegalArgumentException();
    // Must use a lambda + interface or separate method
    return factorialCore(n);
}

private int factorialCore(int n) {
    if (n <= 1) return 1;
    return n * factorialCore(n - 1);
}`,tip:{en:"Local functions can be static (no closure allocation), support generics, and can use yield. Lambdas in Java can't do any of these.",pl:"Lokalne funkcje mogą być static (bez alokacji closure), wspierać generyki i używać yield. Lambdy w Java nie mogą żadnego z nich."}},{name:"out Variables",slug:"out-variables",category:"syntax",summary:{en:"Declare out variables inline at the call site instead of pre-declaring them.",pl:"Deklarowanie zmiennych out inline w miejscu wywołania zamiast wcześniejszego deklarowania."},rationale:{en:'The pattern of "declare variable, then pass it as out" was unnecessarily verbose for common operations like TryParse.',pl:'Wzorzec "zadeklaruj zmienną, potem przekaż jako out" był niepotrzebnie rozwlekły dla częstych operacji jak TryParse.'},csharpCode:`// Before C# 7 — required pre-declaration
// int result;
// if (int.TryParse(input, out result)) { ... }

// C# 7+ — inline out variable
if (int.TryParse(input, out var result))
    Console.WriteLine($"Parsed: {result}");

// Works with discard
if (int.TryParse(input, out _))
    Console.WriteLine("It's a number");

// Dictionary TryGetValue
if (dict.TryGetValue("key", out var value))
    Console.WriteLine(value);`,javaEquivalent:`// Java has no out parameters — use return values
// Common pattern: return Optional or wrapper
Optional<Integer> result = tryParse(input);
if (result.isPresent())
    System.out.println("Parsed: " + result.get());

// Dictionary
var value = map.get("key");
if (value != null)
    System.out.println(value);`,tip:{en:"out variables and discards (_) make Try* methods much cleaner. Java has no out parameters — it uses Optional or return-based patterns instead.",pl:"Zmienne out i odrzuty (_) czynią metody Try* dużo czystszymi. Java nie ma parametrów out — używa Optional lub wzorców opartych na return."}}]},{id:"csharp-8",version:"8.0",dotnetVersion:".NET Core 3.x",year:2019,tagline:{en:"Nullable & Async Streams",pl:"Nullable i strumienie asynchroniczne"},features:[{name:"Nullable Reference Types",slug:"nullable-reference-types",category:"types",summary:{en:"Opt-in compiler warnings when reference types might be null — the billion-dollar mistake, tamed.",pl:"Opcjonalne ostrzeżenia kompilatora gdy typy referencyjne mogą być null — błąd za miliard dolarów, opanowany."},rationale:{en:"NullReferenceException is the most common runtime error. Nullable annotations let the compiler catch potential null dereferences at compile time.",pl:"NullReferenceException to najczęstszy błąd runtime. Adnotacje nullable pozwalają kompilatorowi wychwycić potencjalne dereferencje null w kompilacji."},csharpCode:`#nullable enable

// Non-nullable — compiler warns if you assign null
string name = "Alice";
// string name = null; // Warning CS8600

// Nullable — explicitly opt-in
string? nickname = null; // OK

// Compiler tracks null state
if (nickname != null)
    Console.WriteLine(nickname.Length); // safe

// Null-forgiving operator (I know better)
string definitelyNotNull = nickname!;

// Method signatures express intent
public string GetName() => "Alice";        // never null
public string? FindName(int id) => null;   // might be null`,javaEquivalent:`// Java uses @Nullable / @NonNull annotations (not enforced by compiler)
import org.jetbrains.annotations.Nullable;
import org.jetbrains.annotations.NotNull;

@NotNull String name = "Alice";
@Nullable String nickname = null;

// Only IDE warnings, not compiler errors
if (nickname != null)
    System.out.println(nickname.length());

// Or use Optional
public Optional<String> findName(int id) {
    return Optional.empty();
}`,tip:{en:"C# nullable annotations are enforced by the compiler (warnings). Java's @Nullable annotations are only IDE hints. Enable <Nullable>enable</Nullable> in .csproj.",pl:"Adnotacje nullable C# są egzekwowane przez kompilator (ostrzeżenia). @Nullable Java to tylko podpowiedzi IDE. Włącz <Nullable>enable</Nullable> w .csproj."}},{name:"Switch Expressions",slug:"switch-expressions",category:"pattern-matching",summary:{en:"Switch as an expression that returns a value — more concise than switch statements.",pl:"Switch jako wyrażenie zwracające wartość — bardziej zwięzłe niż instrukcje switch."},rationale:{en:"Switch statements required break, default, and couldn't be used in expression contexts. Switch expressions are concise and exhaustive.",pl:"Instrukcje switch wymagały break, default i nie mogły być używane w kontekście wyrażeń. Wyrażenia switch są zwięzłe i wyczerpujące."},csharpCode:`// Switch expression — returns a value
var description = status switch
{
    Status.Active   => "Currently active",
    Status.Inactive => "Not active",
    Status.Pending  => "Awaiting approval",
    _               => "Unknown status"
};

// Property pattern
var discount = customer switch
{
    { IsVip: true, Years: > 5 }  => 0.20,
    { IsVip: true }               => 0.10,
    { Orders: > 100 }             => 0.05,
    _                              => 0.0
};

// Tuple pattern
var quadrant = (x, y) switch
{
    ( > 0,  > 0) => "Q1",
    ( < 0,  > 0) => "Q2",
    ( < 0,  < 0) => "Q3",
    ( > 0,  < 0) => "Q4",
    _             => "On axis"
};`,javaEquivalent:`// Java switch expression (Java 14+)
var description = switch (status) {
    case ACTIVE -> "Currently active";
    case INACTIVE -> "Not active";
    case PENDING -> "Awaiting approval";
    default -> "Unknown status";
};

// Java has no property patterns or tuple patterns
// Must use if-else chains instead`,tip:{en:"C# switch expressions support property and tuple patterns that Java doesn't have. The discard _ replaces default. Compiler warns if not exhaustive.",pl:"Wyrażenia switch C# wspierają wzorce właściwości i krotki, których Java nie ma. Odrzut _ zastępuje default. Kompilator ostrzega jeśli nie wyczerpujące."}},{name:"Async Streams",slug:"async-streams",category:"async",summary:{en:"Combine async/await with iterators — stream data asynchronously with await foreach.",pl:"Połączenie async/await z iteratorami — strumieniowanie danych asynchronicznie za pomocą await foreach."},rationale:{en:"APIs often return data in pages or chunks. Async streams let you iterate over data that arrives asynchronously, combining yield and await.",pl:"API często zwracają dane stronami lub fragmentami. Strumienie asynchroniczne pozwalają iterować po danych przychodzących asynchronicznie, łącząc yield i await."},csharpCode:`// Async iterator — yields values over time
public async IAsyncEnumerable<int> GetNumbersAsync()
{
    for (int i = 0; i < 10; i++)
    {
        await Task.Delay(100); // simulate async work
        yield return i;
    }
}

// Consume with await foreach
await foreach (var number in GetNumbersAsync())
{
    Console.WriteLine(number);
}

// Real-world: paginated API
public async IAsyncEnumerable<User> GetAllUsersAsync()
{
    string? cursor = null;
    do
    {
        var page = await api.GetUsersAsync(cursor);
        foreach (var user in page.Users)
            yield return user;
        cursor = page.NextCursor;
    } while (cursor != null);
}`,javaEquivalent:`// Java — use reactive streams (Project Reactor / RxJava)
Flux<Integer> getNumbers() {
    return Flux.range(0, 10)
        .delayElements(Duration.ofMillis(100));
}

// Consume reactively
getNumbers().subscribe(System.out::println);

// Or use Java Flow API (Java 9+)
// Much more complex setup needed`,tip:{en:"Async streams are a natural combination of yield and async/await. Java has no equivalent — you need reactive libraries like Project Reactor.",pl:"Strumienie asynchroniczne to naturalne połączenie yield i async/await. Java nie ma odpowiednika — potrzebujesz bibliotek reaktywnych jak Project Reactor."}},{name:"Ranges & Indices",slug:"ranges-indices",category:"syntax",summary:{en:"Index from the end with ^ and slice with .. — Python-like array slicing comes to C#.",pl:"Indeksowanie od końca z ^ i wycinanie z .. — wycinanie tablic jak w Pythonie przychodzi do C#."},rationale:{en:'"Get the last element" and "slice from index 2 to 5" are incredibly common operations. Dedicated syntax makes them readable.',pl:'"Pobierz ostatni element" i "wytnij od indeksu 2 do 5" to niezwykle częste operacje. Dedykowana składnia czyni je czytelnymi.'},csharpCode:`var arr = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// Index from end
var last = arr[^1];      // 9
var secondLast = arr[^2]; // 8

// Range slicing
var slice = arr[2..5];    // [2, 3, 4]
var fromStart = arr[..3]; // [0, 1, 2]
var toEnd = arr[7..];     // [7, 8, 9]
var lastThree = arr[^3..]; // [7, 8, 9]

// Works with strings too
var str = "Hello, World!";
var world = str[7..12]; // "World"`,javaEquivalent:`var arr = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// Last element
var last = arr[arr.length - 1];

// Slicing — requires Arrays.copyOfRange
var slice = Arrays.copyOfRange(arr, 2, 5);
var fromStart = Arrays.copyOfRange(arr, 0, 3);

// String slicing
var str = "Hello, World!";
var world = str.substring(7, 12);`,tip:{en:`^1 means "1 from the end" (like Python's -1). Ranges are exclusive on the end, like Python slices. Java has no equivalent syntax.`,pl:'^1 oznacza "1 od końca" (jak -1 w Pythonie). Zakresy są wyłączne na końcu, jak wycinki Pythona. Java nie ma odpowiedniej składni.'}}]},{id:"csharp-9",version:"9.0",dotnetVersion:".NET 5",year:2020,tagline:{en:"Records & Simplicity",pl:"Rekordy i prostota"},features:[{name:"Records",slug:"records",category:"records",summary:{en:"Immutable reference types with value-based equality, built-in ToString, and non-destructive mutation.",pl:"Niemutowalne typy referencyjne z równoważnością na wartościach, wbudowanym ToString i niedestrukcyjną mutacją."},rationale:{en:"DTOs and value objects require Equals, GetHashCode, ToString boilerplate. Records generate all of this from a concise declaration.",pl:"DTO i obiekty wartości wymagają boilerplate Equals, GetHashCode, ToString. Rekordy generują to wszystko ze zwięzłej deklaracji."},csharpCode:`// Positional record — one line!
public record Person(string Name, int Age);

// Gets: constructor, Equals, GetHashCode, ToString, Deconstruct
var alice = new Person("Alice", 30);
var bob = new Person("Bob", 25);

// Value equality
var alice2 = new Person("Alice", 30);
Console.WriteLine(alice == alice2); // true (value comparison)

// Non-destructive mutation with "with"
var older = alice with { Age = 31 };
Console.WriteLine(older); // Person { Name = Alice, Age = 31 }

// Deconstruction
var (name, age) = alice;`,javaEquivalent:`// Java record (Java 16+)
public record Person(String name, int age) {}

var alice = new Person("Alice", 30);
var bob = new Person("Bob", 25);

// Value equality — same as C#
var alice2 = new Person("Alice", 30);
System.out.println(alice.equals(alice2)); // true

// Java has no "with" expression — must create manually
var older = new Person(alice.name(), 31);`,tip:{en:'C# records and Java records are very similar! Key difference: C# has the "with" expression for non-destructive mutation. Both use value-based equality.',pl:'Rekordy C# i Java są bardzo podobne! Kluczowa różnica: C# ma wyrażenie "with" do niedestrukcyjnej mutacji. Oba używają równości wartości.'}},{name:"Init-Only Properties",slug:"init-only",category:"syntax",summary:{en:"Properties that can only be set during initialization — immutable after construction.",pl:"Właściwości, które można ustawić tylko podczas inicjalizacji — niemutowalne po konstruowaniu."},rationale:{en:"Immutable objects required constructor-only setting. init allows object initializer syntax while preserving immutability.",pl:"Niemutowalne obiekty wymagały ustawiania tylko przez konstruktor. init pozwala na składnię inicjalizatora zachowując niemutowalność."},csharpCode:`public class Config
{
    public string Host { get; init; }
    public int Port { get; init; }
    public bool UseSsl { get; init; }
}

// Can set during initialization
var config = new Config
{
    Host = "localhost",
    Port = 5432,
    UseSsl = true
};

// Cannot modify after!
// config.Port = 3000; // Compile error!`,javaEquivalent:`// Java — use final fields + constructor
public class Config {
    private final String host;
    private final int port;
    private final boolean useSsl;

    public Config(String host, int port, boolean useSsl) {
        this.host = host;
        this.port = port;
        this.useSsl = useSsl;
    }
    // + getters...
}

// Or use a builder pattern (much more code)`,tip:{en:"init gives you immutability + object initializer syntax. Java requires constructors or builders for the same effect.",pl:"init daje niemutowalność + składnię inicjalizatora. Java wymaga konstruktorów lub builderów dla tego samego efektu."}},{name:"Top-Level Statements",slug:"top-level-statements",category:"syntax",summary:{en:"Write executable code without the Main method ceremony — ideal for scripts and small programs.",pl:"Pisanie kodu wykonywalnego bez ceremonii metody Main — idealne dla skryptów i małych programów."},rationale:{en:"The namespace/class/Main boilerplate was intimidating for beginners and unnecessary for simple programs. Top-level statements remove all ceremony.",pl:"Boilerplate namespace/class/Main był odstraszający dla początkujących i zbędny dla prostych programów. Top-level statements usuwają całą ceremonię."},csharpCode:`// This is a complete C# program!
using System.Net.Http;

var client = new HttpClient();
var response = await client.GetStringAsync("https://api.example.com");
Console.WriteLine(response);

// You can even define methods and classes below
void Greet(string name) => Console.WriteLine($"Hello, {name}!");
Greet("World");

record Point(double X, double Y);
var p = new Point(3, 4);`,javaEquivalent:`// Java still requires class + main method
// Java 21+ has unnamed classes (preview)
public class Main {
    public static void main(String[] args) throws Exception {
        var client = HttpClient.newHttpClient();
        var request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com")).build();
        var response = client.send(request, BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,tip:{en:'Top-level statements compile to a regular Main method behind the scenes. Only one file per project can use them. Java 21+ has a similar "unnamed class" preview.',pl:'Top-level statements kompilują się do zwykłej metody Main za kulisami. Tylko jeden plik w projekcie może ich używać. Java 21+ ma podobne "unnamed class" w preview.'}},{name:"Target-Typed new",slug:"target-typed-new",category:"syntax",summary:{en:"Omit the type name in new when the type is known from context.",pl:"Pominięcie nazwy typu w new, gdy typ jest znany z kontekstu."},rationale:{en:"When the type is declared on the left side, repeating it on the right is redundant noise.",pl:"Gdy typ jest zadeklarowany po lewej stronie, powtarzanie go po prawej to zbędny szum."},csharpCode:`// Type is known from the declaration
List<string> names = new();
Dictionary<string, List<int>> map = new();

// In field declarations
private readonly HttpClient client = new();

// In method arguments
void Process(CancellationToken token = new()) { }

// Combined with object initializer
Config config = new()
{
    Host = "localhost",
    Port = 5432
};`,javaEquivalent:`// Java uses diamond operator (since Java 7)
List<String> names = new ArrayList<>();
Map<String, List<Integer>> map = new HashMap<>();

// Java has no target-typed new for non-generic types
HttpClient client = HttpClient.newHttpClient();`,tip:{en:"Target-typed new() is like an inverse of var: var infers the left side, new() infers the right side. Java's diamond operator (<>) is limited to generics.",pl:"Target-typed new() to odwrotność var: var wnioskuje lewą stronę, new() wnioskuje prawą. Diamond operator Java (<>) jest ograniczony do generyków."}}]},{id:"csharp-10",version:"10",dotnetVersion:".NET 6",year:2021,tagline:{en:"Minimal Ceremony",pl:"Minimalna ceremonialność"},features:[{name:"Global Usings",slug:"global-usings",category:"syntax",summary:{en:"Declare using directives once for the entire project — no more repeating common imports.",pl:"Deklarowanie dyrektyw using raz dla całego projektu — koniec z powtarzaniem częstych importów."},rationale:{en:"Almost every file imports System, System.Collections.Generic, System.Linq, etc. Global usings eliminate this repetition project-wide.",pl:"Prawie każdy plik importuje System, System.Collections.Generic, System.Linq itp. Globalne usingi eliminują to powtórzenie w całym projekcie."},csharpCode:`// In a GlobalUsings.cs file (or any .cs file)
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;
global using MyApp.Models;

// Now every file in the project has these available
// No need to repeat "using System;" in every file

// .NET 6+ also has implicit usings via .csproj:
// <ImplicitUsings>enable</ImplicitUsings>`,javaEquivalent:`// Java has no global imports
// Every file must declare its imports
import java.util.*;
import java.util.stream.*;

// Or use wildcard imports
import java.util.*;`,tip:{en:"Global usings + implicit usings mean new .NET 6+ projects often have zero using statements in most files. Java still requires imports per file.",pl:"Globalne usingi + implicit usingi sprawiają, że nowe projekty .NET 6+ często nie mają żadnych using w większości plików. Java wciąż wymaga importów per plik."}},{name:"File-Scoped Namespaces",slug:"file-scoped-namespaces",category:"syntax",summary:{en:"Declare a namespace for the entire file with a single line — no more indentation wrapper.",pl:"Deklaracja namespace dla całego pliku jedną linią — koniec z wcinaniem całego kodu."},rationale:{en:"The namespace { ... } wrapper added an indentation level to every file for no benefit (99% of files have one namespace). File-scoped removes it.",pl:"Wrapper namespace { ... } dodawał poziom wcięcia do każdego pliku bez korzyści (99% plików ma jeden namespace). File-scoped to usuwa."},csharpCode:`// Before — block-scoped namespace
// namespace MyApp.Models
// {
//     public class User { ... }
// }

// C# 10 — file-scoped namespace (one line!)
namespace MyApp.Models;

public class User
{
    public string Name { get; init; }
    public string Email { get; init; }
}

public class Order
{
    public int Id { get; init; }
    public decimal Total { get; init; }
}`,javaEquivalent:`// Java package declaration is already file-scoped
package com.myapp.models;

public class User {
    private String name;
    private String email;
    // ...
}`,tip:{en:"File-scoped namespaces make C# files look more like Java packages. One less indentation level in every file.",pl:"File-scoped namespaces sprawiają, że pliki C# wyglądają bardziej jak paczki Java. Jeden poziom wcięcia mniej w każdym pliku."}},{name:"Record Structs",slug:"record-structs",category:"records",summary:{en:"Records as value types — stack-allocated with value semantics, perfect for small data.",pl:"Rekordy jako typy wartościowe — alokowane na stosie z semantyką wartości, idealne dla małych danych."},rationale:{en:"record class is a reference type on the heap. For small, frequently-used data (Point, Color), a record struct avoids heap allocation.",pl:"record class to typ referencyjny na stercie. Dla małych, często używanych danych (Point, Color), record struct unika alokacji na stercie."},csharpCode:`// Record struct — value type with record features
public readonly record struct Point(double X, double Y)
{
    public double Distance => Math.Sqrt(X * X + Y * Y);
}

var p1 = new Point(3, 4);
var p2 = new Point(3, 4);

Console.WriteLine(p1 == p2);        // true (value equality)
Console.WriteLine(p1.Distance);     // 5
Console.WriteLine(p1);              // Point { X = 3, Y = 4 }

// Non-destructive mutation
var p3 = p1 with { X = 6 };         // Point { X = 6, Y = 4 }`,javaEquivalent:`// Java records are always reference types (on heap)
public record Point(double x, double y) {
    public double distance() {
        return Math.sqrt(x * x + y * y);
    }
}
// No value-type / stack-allocated option in Java`,tip:{en:"Use record struct for small, frequently-created data to avoid GC pressure. Java records are always heap-allocated reference types.",pl:"Używaj record struct dla małych, często tworzonych danych, by uniknąć presji GC. Rekordy Java są zawsze alokowanymi na stercie typami referencyjnymi."}}]},{id:"csharp-11",version:"11",dotnetVersion:".NET 7",year:2022,tagline:{en:"Raw Power",pl:"Surowa moc"},features:[{name:"Raw String Literals",slug:"raw-string-literals",category:"syntax",summary:{en:"Multi-line strings with no escape sequences — use triple quotes and automatic indentation trimming.",pl:"Ciagi wieloliniowe bez sekwencji ucieczki — potrójne cudzysłowy i automatyczne przycinanie wcięcia."},rationale:{en:"JSON, XML, SQL, and regex in strings required heavy escaping. Raw strings allow any content without escapes, with clean indentation.",pl:"JSON, XML, SQL i regex w ciągach wymagały ciężkiego escapowania. Surowe ciągi pozwalają na dowolną treść bez escape, z czystym wcięciem."},csharpCode:`// Raw string literal — triple (or more) quotes
var json = """
    {
        "name": "Alice",
        "age": 30,
        "scores": [95, 87, 92]
    }
    """;

// With interpolation — use extra $ signs
var name = "Alice";
var interpolated = $$"""
    {
        "name": "{{name}}",
        "query": "SELECT * FROM users"
    }
    """;

// Regex without escaping
var pattern = """\\d{3}-\\d{4}""";`,javaEquivalent:`// Java text blocks (Java 13+)
var json = """
        {
            "name": "Alice",
            "age": 30,
            "scores": [95, 87, 92]
        }
        """;

// Java has no interpolation in text blocks
var interpolated = """
        {
            "name": "%s",
            "query": "SELECT * FROM users"
        }
        """.formatted(name);`,tip:{en:`C# raw strings support interpolation ($$"...{{expr}}...") — Java text blocks don't. Both handle indentation automatically.`,pl:'Surowe ciągi C# wspierają interpolacje ($$"...{{expr}}...") — text blocks Java nie. Oba obsługują wcięcia automatycznie.'}},{name:"List Patterns",slug:"list-patterns",category:"pattern-matching",summary:{en:"Pattern match against list/array elements — check structure and extract values.",pl:"Dopasowanie wzorców do elementów list/tablic — sprawdzanie struktury i ekstrakcja wartości."},rationale:{en:"Checking if a collection has a specific shape (starts with, ends with, certain length) required manual index checks. List patterns make it declarative.",pl:"Sprawdzanie czy kolekcja ma określony kształt wymagało ręcznych kontroli indeksów. Wzorce list czynią to deklaratywnym."},csharpCode:`int[] numbers = { 1, 2, 3, 4, 5 };

// Exact match
if (numbers is [1, 2, 3, 4, 5])
    Console.WriteLine("Exact match");

// First, rest
if (numbers is [var first, .. var rest])
    Console.WriteLine($"First: {first}, rest has {rest.Length} items");

// Start and end
if (numbers is [1, .., 5])
    Console.WriteLine("Starts with 1, ends with 5");

// In switch
string Describe(int[] arr) => arr switch
{
    []             => "empty",
    [var x]        => $"single: {x}",
    [var x, var y] => $"pair: ({x}, {y})",
    [_, ..]        => $"many: {arr.Length} elements"
};`,javaEquivalent:`// Java has no list patterns
// Must use manual checks
if (numbers.length == 5 && numbers[0] == 1 && numbers[4] == 5) {
    System.out.println("Starts with 1, ends with 5");
}

// Switch requires explicit checks
String describe(int[] arr) {
    return switch (arr.length) {
        case 0 -> "empty";
        case 1 -> "single: " + arr[0];
        case 2 -> "pair: (" + arr[0] + ", " + arr[1] + ")";
        default -> "many: " + arr.length + " elements";
    };
}`,tip:{en:"List patterns with .. (slice pattern) are unique to C#. They compose with other patterns for powerful declarative checks.",pl:"Wzorce list z .. (wzorzec wycinania) są unikalne dla C#. Komponują się z innymi wzorcami dając potężne deklaratywne sprawdzenia."}},{name:"Required Members",slug:"required-members",category:"types",summary:{en:"Mark properties as required — compiler ensures they're set during initialization.",pl:"Oznaczanie właściwości jako wymaganych — kompilator zapewnia ich ustawienie podczas inicjalizacji."},rationale:{en:"Object initializers were convenient but didn't enforce that critical properties were set. required fills this gap.",pl:"Inicjalizatory obiektów były wygodne, ale nie wymuszały ustawienia krytycznych właściwości. required wypełnia tę lukę."},csharpCode:`public class User
{
    public required string Name { get; init; }
    public required string Email { get; init; }
    public string? Bio { get; init; }
}

// Compiler enforces required properties
var user = new User
{
    Name = "Alice",       // required
    Email = "a@test.com"  // required
    // Bio is optional
};

// This would NOT compile:
// var bad = new User { Name = "Bob" };
// Error: 'Email' is required`,javaEquivalent:`// Java uses constructor parameters for required fields
public class User {
    private final String name;  // required via constructor
    private final String email;
    private String bio;         // optional

    public User(String name, String email) {
        this.name = Objects.requireNonNull(name);
        this.email = Objects.requireNonNull(email);
    }
}

// Or use Lombok @NonNull / @RequiredArgsConstructor`,tip:{en:"required combines the flexibility of object initializers with the safety of constructors. Java achieves this through constructor parameters.",pl:"required łączy elastyczność inicjalizatorów obiektów z bezpieczeństwem konstruktorów. Java osiąga to przez parametry konstruktora."}},{name:"Generic Math",slug:"generic-math",category:"types",summary:{en:"Static abstract interface members enable generic mathematical operations — write one Sum<T> for all numeric types.",pl:"Statyczne abstrakcyjne członki interfejsów umożliwiają generyczne operacje matematyczne — napisz jeden Sum<T> dla wszystkich typów numerycznych."},rationale:{en:"Before C# 11, writing generic math required workarounds because operators weren't part of interfaces. Static abstracts fix this.",pl:"Przed C# 11 pisanie generycznej matematyki wymagało obejść, ponieważ operatory nie były częścią interfejsów. Statyczne abstrakcyjne to naprawiają."},csharpCode:`// Generic method that works with any number type
T Sum<T>(IEnumerable<T> values) where T : INumber<T>
{
    T result = T.Zero;
    foreach (var value in values)
        result += value;
    return result;
}

// Works with int, double, decimal, etc.
var intSum = Sum(new[] { 1, 2, 3, 4 });          // 10
var doubleSum = Sum(new[] { 1.5, 2.5, 3.0 });    // 7.0
var decimalSum = Sum(new[] { 10m, 20m, 30m });    // 60

// Custom numeric type can implement INumber<T>`,javaEquivalent:`// Java has no generic math — must use Number or overloads
double sum(Collection<? extends Number> values) {
    return values.stream()
        .mapToDouble(Number::doubleValue)
        .sum();
}
// Loses type precision — always returns double`,tip:{en:"INumber<T>, IAdditionOperators<T,T,T> etc. let you write truly generic math. Java's Number abstraction is much weaker — no operator support.",pl:"INumber<T>, IAdditionOperators<T,T,T> itp. pozwalają pisać naprawdę generyczną matematykę. Abstrakcja Number Java jest dużo słabsza — brak wsparcia operatorów."}}]},{id:"csharp-12",version:"12",dotnetVersion:".NET 8",year:2023,tagline:{en:"Constructor Evolution",pl:"Ewolucja konstruktorów"},features:[{name:"Primary Constructors",slug:"primary-constructors",category:"syntax",summary:{en:"Define constructor parameters directly on the class declaration — available throughout the class body.",pl:"Definiowanie parametrów konstruktora bezpośrednio na deklaracji klasy — dostępne w całym ciele klasy."},rationale:{en:"Many classes just assign constructor parameters to fields. Primary constructors eliminate this boilerplate, similar to records but for mutable classes.",pl:"Wiele klas tylko przypisuje parametry konstruktora do pól. Konstruktory podstawowe eliminują ten boilerplate, podobne do rekordów, ale dla mutowalnych klas."},csharpCode:`// Primary constructor — parameters on the class
public class UserService(ILogger<UserService> logger, IUserRepository repo)
{
    public async Task<User?> GetUser(int id)
    {
        logger.LogInformation("Getting user {Id}", id);
        return await repo.FindByIdAsync(id);
    }

    public async Task CreateUser(string name)
    {
        logger.LogInformation("Creating user {Name}", name);
        await repo.AddAsync(new User(name));
    }
}

// Perfect for dependency injection
builder.Services.AddScoped<UserService>();`,javaEquivalent:`// Java — traditional constructor with field assignment
public class UserService {
    private final Logger logger;
    private final UserRepository repo;

    // Manual constructor
    public UserService(Logger logger, UserRepository repo) {
        this.logger = logger;
        this.repo = repo;
    }

    // Or use Lombok @RequiredArgsConstructor
}`,tip:{en:"Unlike record constructors, primary constructor parameters are NOT auto-properties — they're just available as parameters in the class body.",pl:"W przeciwieństwie do konstruktorów rekordów, parametry konstruktora podstawowego NIE są auto-właściwościami — są po prostu dostępne jako parametry w ciele klasy."}},{name:"Collection Expressions",slug:"collection-expressions",category:"syntax",summary:{en:"Unified syntax for creating arrays, lists, spans and more with [a, b, c] and spread operator (..).",pl:"Zunifikowana składnia tworzenia tablic, list, spanów i więcej za pomocą [a, b, c] i operatora rozprzestrzeniania (..)."},rationale:{en:"Every collection type had different creation syntax (new[], new List<T>, Array.Empty, etc.). Collection expressions unify them all.",pl:"Każdy typ kolekcji miał inną składnię tworzenia. Wyrażenia kolekcji unifikują je wszystkie."},csharpCode:`// Unified collection syntax
int[] arr = [1, 2, 3];
List<string> names = ["Alice", "Bob", "Charlie"];
Span<int> span = [10, 20, 30];
ImmutableArray<int> immutable = [4, 5, 6];

// Empty collection
int[] empty = [];

// Spread operator
int[] first = [1, 2, 3];
int[] second = [4, 5, 6];
int[] combined = [..first, ..second]; // [1, 2, 3, 4, 5, 6]

// In method calls
PrintNames(["Alice", "Bob"]);`,javaEquivalent:`// Java — different syntax per type
int[] arr = {1, 2, 3};
List<String> names = List.of("Alice", "Bob", "Charlie");
// No Span equivalent

// No spread operator — use Stream.concat or addAll
int[] combined = IntStream.concat(
    Arrays.stream(first),
    Arrays.stream(second)
).toArray();`,tip:{en:"Collection expressions work with any type that has a Create method or builder. The spread (..) is like JavaScript's spread operator.",pl:"Wyrażenia kolekcji działają z dowolnym typem mającym metodę Create lub builder. Spread (..) jest jak operator spread w JavaScript."}},{name:"Alias Any Type",slug:"alias-any-type",category:"syntax",summary:{en:"Create type aliases for any type — tuples, arrays, pointers, generics — not just named types.",pl:"Tworzenie aliasów typów dla dowolnego typu — krotki, tablice, wskaźniki, generyki — nie tylko nazwane typy."},rationale:{en:"using aliases (C# 1.0) only worked for named types. Now you can alias tuples, arrays, and complex generic types for readability.",pl:"Aliasy using (C# 1.0) działały tylko dla nazwanych typów. Teraz można aliasować krotki, tablice i złożone typy generyczne dla czytelności."},csharpCode:`// Alias a tuple
using Point = (double X, double Y);
using NameAge = (string Name, int Age);

// Alias complex generics
using UserCache = System.Collections.Generic.Dictionary<
    string,
    System.Collections.Generic.List<User>>;

// Alias an array
using Matrix = double[][];

// Usage — much cleaner
Point origin = (0, 0);
UserCache cache = new();
cache["admins"] = [new User("Alice"), new User("Bob")];`,javaEquivalent:`// Java has no type aliases
// Must use the full type everywhere
Map<String, List<User>> cache = new HashMap<>();
// Or create a wrapper class (heavy-handed)
class UserCache extends HashMap<String, List<User>> {}`,tip:{en:"Type aliases are compile-time only — no runtime cost. Great for making complex generic types readable. Java has no equivalent.",pl:"Aliasy typów działają tylko w kompilacji — zero kosztu runtime. Świetne do czytelności złożonych typów generycznych. Java nie ma odpowiednika."}}]},{id:"csharp-13",version:"13",dotnetVersion:".NET 9",year:2024,tagline:{en:"Refinements & Flexibility",pl:"Udoskonalenia i elastyczność"},features:[{name:"params Collections",slug:"params-collections",category:"syntax",summary:{en:"params now works with any collection type — Span<T>, List<T>, IEnumerable<T>, not just arrays.",pl:"params teraz działa z dowolnym typem kolekcji — Span<T>, List<T>, IEnumerable<T>, nie tylko tablicami."},rationale:{en:"params T[] always allocated an array. With params Span<T>, the compiler can stack-allocate, avoiding heap allocation for small argument lists.",pl:"params T[] zawsze alokował tablice. Z params Span<T> kompilator może alokować na stosie, unikając alokacji na stercie dla małych list argumentów."},csharpCode:`// params with Span<T> — zero allocation for small args
public int Sum(params ReadOnlySpan<int> values)
{
    int total = 0;
    foreach (var v in values)
        total += v;
    return total;
}

// params with any collection type
public void Log(params IEnumerable<string> messages)
{
    foreach (var msg in messages)
        Console.WriteLine(msg);
}

// Caller syntax is unchanged
var result = Sum(1, 2, 3, 4, 5);
Log("Hello", "World");

// Can also pass collections directly
int[] numbers = [1, 2, 3];
var total = Sum(numbers);`,javaEquivalent:`// Java varargs always use arrays
public int sum(int... values) {
    int total = 0;
    for (var v : values) total += v;
    return total;
}

// Always allocates an array
var result = sum(1, 2, 3, 4, 5);`,tip:{en:"params Span<T> can avoid heap allocation entirely for small argument counts. Java varargs always allocate an array on the heap.",pl:"params Span<T> może całkowicie uniknąć alokacji na stercie dla małej liczby argumentów. Java varargs zawsze alokuje tablice na stercie."}},{name:"New Lock Type",slug:"new-lock-type",category:"performance",summary:{en:"System.Threading.Lock provides a faster, more efficient alternative to lock(object).",pl:"System.Threading.Lock zapewnia szybszą, bardziej wydajną alternatywę dla lock(object)."},rationale:{en:"The traditional lock(obj) uses Monitor which has overhead. The new Lock type is purpose-built for mutual exclusion with better performance.",pl:"Tradycyjny lock(obj) używa Monitor, który ma narzut. Nowy typ Lock jest specjalnie zbudowany do wzajemnego wykluczania z lepszą wydajnością."},csharpCode:`// New Lock type — more efficient than lock(object)
private readonly Lock _lock = new();

public void ThreadSafeMethod()
{
    lock (_lock) // compiler recognizes Lock type
    {
        // critical section
        sharedResource.Update();
    }
}

// Or with explicit scope
public void AlternativeUsage()
{
    using (_lock.EnterScope())
    {
        // critical section
    }
}`,javaEquivalent:`// Java has ReentrantLock (similar concept)
private final ReentrantLock lock = new ReentrantLock();

public void threadSafeMethod() {
    lock.lock();
    try {
        // critical section
        sharedResource.update();
    } finally {
        lock.unlock();
    }
}

// Or synchronized (like old lock(object))
public synchronized void simpleMethod() {
    sharedResource.update();
}`,tip:{en:"The new Lock type works with the existing lock keyword. The compiler detects the Lock type and generates optimized code.",pl:"Nowy typ Lock działa z istniejącym słowem kluczowym lock. Kompilator wykrywa typ Lock i generuje zoptymalizowany kod."}},{name:"Partial Properties",slug:"partial-properties",category:"syntax",summary:{en:"Properties can now be partial — declare in one part, implement in another. Great for source generators.",pl:"Właściwości mogą być teraz partial — deklaracja w jednej części, implementacja w drugiej. Świetne dla generatorów źródłowych."},rationale:{en:"Source generators (like regex, JSON serialization) needed to generate property implementations. Partial properties enable this cleanly.",pl:"Generatory źródłowe (jak regex, serializacja JSON) potrzebowały generować implementacje właściwości. Partial properties umożliwiają to czysto."},csharpCode:`// Partial class with partial property declaration
public partial class UserModel
{
    public partial string Name { get; set; }
    public partial int Age { get; set; }
}

// Implementation (e.g., generated by a source generator)
public partial class UserModel
{
    private string _name = "";
    public partial string Name
    {
        get => _name;
        set
        {
            _name = value;
            OnPropertyChanged(nameof(Name));
        }
    }

    private int _age;
    public partial int Age
    {
        get => _age;
        set
        {
            _age = value;
            OnPropertyChanged(nameof(Age));
        }
    }
}`,javaEquivalent:`// Java has no partial classes or properties
// Annotation processors generate separate files
// Lombok generates code at compile time via annotations
@Data
public class UserModel {
    private String name;
    private int age;
}`,tip:{en:"Partial properties extend C#'s source generator story. Combined with partial methods (C# 3.0) and partial classes, they enable powerful code generation.",pl:"Partial properties rozszerzają historię generatorów źródłowych C#. W połączeniu z partial methods (C# 3.0) i partial classes, umożliwiają potężną generację kodu."}}]}];function Ke(e){return L.find(a=>a.id===e)}function Ze(e){const a=L.findIndex(n=>n.id===e);return{prev:a>0?L[a-1]:void 0,next:a<L.length-1?L[a+1]:void 0}}function ea(e){const a=e.toLowerCase(),n=[];for(const s of L)for(const i of s.features)(i.name.toLowerCase().includes(a)||i.slug.includes(a)||i.summary.en.toLowerCase().includes(a)||i.summary.pl.toLowerCase().includes(a))&&n.push({version:s,feature:i});return n}export{Ze as a,Qe as b,Ve as c,ea as d,He as e,Ye as f,Ke as g,Ge as i,$e as l,Be as r,$ as s,Xe as t,L as v};
