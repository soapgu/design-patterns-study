namespace Builder;

public sealed class Product
{
    private readonly List<string> _parts = [];

    public IReadOnlyList<string> Parts => _parts;

    public void Add(string part)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(part);
        _parts.Add(part);
    }

    public string ListParts() => $"Product parts: {string.Join(", ", _parts)}";
}
