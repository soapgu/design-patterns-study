namespace Builder;

public sealed class Director
{
    public void BuildMinimalViableProduct(IBuilder builder)
    {
        ArgumentNullException.ThrowIfNull(builder);
        builder.BuildPartA();
    }

    public void BuildFullFeaturedProduct(IBuilder builder)
    {
        ArgumentNullException.ThrowIfNull(builder);
        builder.BuildPartA();
        builder.BuildPartB();
        builder.BuildPartC();
    }
}
