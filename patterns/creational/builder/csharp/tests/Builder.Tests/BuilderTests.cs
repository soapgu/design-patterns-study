using Xunit;

namespace Builder.Tests;

public sealed class BuilderTests
{
    [Fact]
    public void BuilderCreatesAProductOneStepAtATime()
    {
        var builder = new ConcreteBuilder();

        builder.BuildPartA();
        builder.BuildPartC();

        Assert.Equal(["PartA1", "PartC1"], builder.GetProduct().Parts);
    }

    [Fact]
    public void DirectorBuildsTheMinimalRecipe()
    {
        var builder = new ConcreteBuilder();
        var director = new Director();

        director.BuildMinimalViableProduct(builder);

        Assert.Equal(["PartA1"], builder.GetProduct().Parts);
    }

    [Fact]
    public void DirectorBuildsTheFullRecipeInOrder()
    {
        var builder = new ConcreteBuilder();
        var director = new Director();

        director.BuildFullFeaturedProduct(builder);

        Assert.Equal(["PartA1", "PartB1", "PartC1"], builder.GetProduct().Parts);
    }

    [Fact]
    public void GettingAProductResetsTheBuilderWithoutChangingThePreviousResult()
    {
        var builder = new ConcreteBuilder();
        builder.BuildPartA();
        var firstProduct = builder.GetProduct();

        builder.BuildPartB();
        var secondProduct = builder.GetProduct();

        Assert.Equal(["PartA1"], firstProduct.Parts);
        Assert.Equal(["PartB1"], secondProduct.Parts);
    }

    [Fact]
    public void DirectorWorksWithAnyBuilderThatImplementsTheCommonSteps()
    {
        var builder = new RecordingBuilder();

        new Director().BuildFullFeaturedProduct(builder);

        Assert.Equal(["A", "B", "C"], builder.Calls);
    }

    private sealed class RecordingBuilder : IBuilder
    {
        public List<string> Calls { get; } = [];

        public void BuildPartA() => Calls.Add("A");

        public void BuildPartB() => Calls.Add("B");

        public void BuildPartC() => Calls.Add("C");
    }
}
