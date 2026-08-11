# 设计模式概要

本文是本仓库的设计模式知识入口，主要参考
[Refactoring.Guru：设计模式](https://refactoringguru.cn/design-patterns)及其
[设计模式目录](https://refactoringguru.cn/design-patterns/catalog)，并使用自己的语言归纳学习重点。

## 什么是设计模式

设计模式是针对软件设计中反复出现的问题，总结出来的一类可复用设计经验。它描述的不是一段可以直接复制的
固定代码，而是问题背景、参与者关系、解决思路及其取舍。面对具体项目时，需要结合业务约束、编程语言和现有
架构调整实现。

可以把模式理解为设计蓝图：它告诉我们各部分应当如何分工与协作，但不会替我们决定所有实现细节。同一个模式
在 C#、TypeScript 或其他语言中的代码可能明显不同，其意图和设计原则仍然可以保持一致。

### 模式、算法、库与框架的区别

| 概念 | 主要回答的问题 | 表现形式 |
| --- | --- | --- |
| 设计模式 | 一组对象或职责应当如何协作 | 可按场景调整的设计思路与关系 |
| 算法 | 如何通过明确步骤得到结果 | 输入、步骤和输出相对确定的过程 |
| 库 | 如何复用已经实现好的能力 | 由应用代码主动调用的具体代码 |
| 框架 | 应用整体如何组织并接入扩展点 | 控制程序流程的工程骨架和约定 |

模式可能被实现为库或框架的一部分，算法也可能出现在某个模式中，但它们关注的层次不同。学习模式的重点不是
记忆类名，而是理解职责为什么这样拆分、依赖为什么这样组织。

## 一个模式通常包含什么

完整理解一个模式，可以从以下方面展开：

- **意图**：模式想解决什么问题，目标是什么。
- **动机**：问题为什么会出现，原有设计受到什么变化压力。
- **结构**：参与者之间的组合、继承、依赖和调用关系。
- **参与者**：每个对象、类或函数分别承担什么职责。
- **适用性**：哪些信号说明可以考虑该模式，哪些场景不适合使用。
- **实现方式**：如何结合具体语言表达模式，而不是机械照搬类图。
- **优点与代价**：它消除了什么复杂度，又引入了哪些间接层和维护成本。
- **模式关系**：它与相似模式如何区分，能与哪些模式组合。

模式的名字和结构只是入口。能够解释其意图、适用边界和代价，才说明真正理解了这个模式。

## 历史与价值

“模式”思想最初来自建筑领域，克里斯托佛·亚历山大用模式描述可反复应用的空间设计经验。1994 年，Erich
Gamma、Richard Helm、Ralph Johnson 和 John Vlissides 将这一思想系统地引入面向对象软件设计，在
《设计模式：可复用面向对象软件的基础》中总结了 23 个经典模式，四位作者通常被称为 GoF（Gang of Four）。

设计模式的主要价值有两点：

1. **复用设计经验**：提前认识常见的变化、耦合和职责分配问题，以及经过实践检验的处理思路。
2. **形成共同语言**：团队可以用模式名称快速表达一组设计意图和协作关系，减少重复解释。

模式并不能替代对业务问题的分析。它提供候选方案和讨论词汇，最终仍需由开发者判断是否值得使用。

## 分类

GoF 模式通常根据意图分成三类：

- **创建型模式**关注对象如何创建，在隐藏具体构造细节的同时提高创建过程的灵活性和可复用性。
- **结构型模式**关注类和对象如何组合，在形成更大结构的同时控制耦合并保持扩展能力。
- **行为模式**关注对象如何沟通、分配职责和替换行为，使协作关系更清晰、更容易变化。

分类用于建立索引，不应成为绝对边界。一个真实设计可能同时使用不同类别的多个模式。

## 22 个经典模式速览

### 创建型模式（Creational Patterns）

| 模式 | 一句话用途 |
| --- | --- |
| [工厂方法（Factory Method）](https://refactoringguru.cn/design-patterns/factory-method) | 在父类中定义创建接口，由子类决定实例化哪种具体产品。 |
| [抽象工厂（Abstract Factory）](https://refactoringguru.cn/design-patterns/abstract-factory) | 在不依赖具体类的情况下，创建一组相互匹配的产品。 |
| [生成器（Builder）](https://refactoringguru.cn/design-patterns/builder) | 将复杂对象的分步构建与最终表示分离，同一过程可以生成不同结果。 |
| [原型（Prototype）](https://refactoringguru.cn/design-patterns/prototype) | 通过复制已有对象创建新对象，避免依赖其具体类型和复杂构造过程。 |
| [单例（Singleton）](https://refactoringguru.cn/design-patterns/singleton) | 控制一个类只有一个实例，并提供统一访问点。 |

### 结构型模式（Structural Patterns）

| 模式 | 一句话用途 |
| --- | --- |
| [适配器（Adapter）](https://refactoringguru.cn/design-patterns/adapter) | 转换对象接口，使原本不兼容的对象可以协作。 |
| [桥接（Bridge）](https://refactoringguru.cn/design-patterns/bridge) | 将抽象与实现拆成两个可独立变化的维度，通过组合连接它们。 |
| [组合（Composite）](https://refactoringguru.cn/design-patterns/composite) | 将对象组织成树形结构，让客户端以一致方式处理单个对象和对象组合。 |
| [装饰（Decorator）](https://refactoringguru.cn/design-patterns/decorator) | 通过包装对象动态叠加职责，避免为功能组合建立大量子类。 |
| [外观（Facade）](https://refactoringguru.cn/design-patterns/facade) | 为复杂子系统提供一个更简单、稳定的统一入口。 |
| [享元（Flyweight）](https://refactoringguru.cn/design-patterns/flyweight) | 共享大量对象中的公共状态，以降低内存和创建成本。 |
| [代理（Proxy）](https://refactoringguru.cn/design-patterns/proxy) | 用替代对象控制对真实对象的访问，并在访问前后执行附加逻辑。 |

### 行为模式（Behavioral Patterns）

| 模式 | 一句话用途 |
| --- | --- |
| [责任链（Chain of Responsibility）](https://refactoringguru.cn/design-patterns/chain-of-responsibility) | 让请求沿处理者链传递，直到某个处理者接手或链结束。 |
| [命令（Command）](https://refactoringguru.cn/design-patterns/command) | 将请求封装为对象，使调用、排队、记录和撤销能够独立管理。 |
| [迭代器（Iterator）](https://refactoringguru.cn/design-patterns/iterator) | 在不暴露集合内部结构的情况下按顺序访问其元素。 |
| [中介者（Mediator）](https://refactoringguru.cn/design-patterns/mediator) | 将多个对象间的复杂交互集中到中介者，减少对象之间的直接依赖。 |
| [备忘录（Memento）](https://refactoringguru.cn/design-patterns/memento) | 在不破坏封装的前提下保存和恢复对象先前的状态。 |
| [观察者（Observer）](https://refactoringguru.cn/design-patterns/observer) | 建立一对多订阅关系，使状态变化能够通知所有相关对象。 |
| [状态（State）](https://refactoringguru.cn/design-patterns/state) | 将状态相关行为拆入独立对象，使对象在状态变化时表现出不同行为。 |
| [策略（Strategy）](https://refactoringguru.cn/design-patterns/strategy) | 将可替换算法封装为独立策略，使客户端能在运行时选择行为。 |
| [模板方法（Template Method）](https://refactoringguru.cn/design-patterns/template-method) | 在父类中固定算法骨架，将部分步骤交给子类实现或调整。 |
| [访问者（Visitor）](https://refactoringguru.cn/design-patterns/visitor) | 将作用于对象结构的操作分离出来，便于增加新操作而不修改元素类。 |

## 适用边界与争议

设计模式是经验工具，不是质量保证。使用前需要特别注意以下问题：

- **语言能力可能已经提供更简单的表达**：例如部分策略模式可以直接使用函数或 Lambda，而不必建立完整类层次。
- **标准结构不一定适合当前场景**：模式需要结合实际约束裁剪，类图相似不代表意图正确。
- **间接层有真实成本**：更多接口、对象和调用跳转可能增加理解、调试和维护难度。
- **不要为假设的未来提前建模**：只有变化已经出现，或需求明确要求扩展时，模式的复杂度才更可能值得。
- **避免模式驱动设计**：先识别问题，再选择包括简单实现、语言特性、模式或框架在内的解决方案。

一个实用判断是：模式消除的复杂度是否大于它引入的复杂度？如果普通条件、函数或直接组合已经足够清晰，
就没有必要为了使用模式而增加结构。

## 本仓库的学习方式

每个模式按照三个阶段推进：

1. **概念理解**：能够脱离代码说明意图、参与者、适用边界和设计原则。
2. **代码实现**：参考对应语言示例完成基础实现，并以自动化测试验证模式的关键行为。
3. **体验总结**：记录亲自实现后的收益、成本、语言差异、替代方案和使用感受。

后续将在 `patterns/<category>/<pattern>/` 下建立单个模式目录。目录中的 `README.md` 负责深入笔记，语言
子目录负责示例与测试；没有开始的模式和语言不创建空目录。

## 资料来源

- [Refactoring.Guru：设计模式](https://refactoringguru.cn/design-patterns)
- [Refactoring.Guru：设计模式目录](https://refactoringguru.cn/design-patterns/catalog)
- 《设计模式：可复用面向对象软件的基础》

本文为学习摘要，不替代原始资料。需要查看完整解释、结构图和语言示例时，请访问对应来源页面。
