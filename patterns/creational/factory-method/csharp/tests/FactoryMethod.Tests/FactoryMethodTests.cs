using Xunit;

namespace FactoryMethod.Tests;

public sealed class FactoryMethodTests
{
    [Fact]
    public void ConcreteCreator1CreatesConcreteProduct1()
    {
        Creator creator = new ConcreteCreator1();

        var product = creator.FactoryMethod();

        Assert.IsType<ConcreteProduct1>(product);
    }

    [Fact]
    public void ConcreteCreator2CreatesConcreteProduct2()
    {
        Creator creator = new ConcreteCreator2();

        var product = creator.FactoryMethod();

        Assert.IsType<ConcreteProduct2>(product);
    }

    [Theory]
    [InlineData(typeof(ConcreteCreator1), "{Result of ConcreteProduct1}")]
    [InlineData(typeof(ConcreteCreator2), "{Result of ConcreteProduct2}")]
    public void CoreOperationUsesTheProductCreatedByTheFactoryMethod(
        Type creatorType,
        string expectedProductResult)
    {
        var creator = Assert.IsAssignableFrom<Creator>(Activator.CreateInstance(creatorType));

        var result = creator.SomeOperation();

        Assert.Contains(expectedProductResult, result);
    }

    [Fact]
    public void ANewCreatorCanReuseTheExistingCoreOperation()
    {
        Creator creator = new TestCreator();

        var result = creator.SomeOperation();

        Assert.Contains(TestProduct.Result, result);
    }

    private sealed class TestCreator : Creator
    {
        public override IProduct FactoryMethod() => new TestProduct();
    }

    private sealed class TestProduct : IProduct
    {
        public const string Result = "{Result of test product}";

        public string Operation() => Result;
    }
}
