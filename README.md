# messengeth

UI for messaging on Ethereum blockchain.

Forked from (https://github.com/eabz/react-dapp-bolierplate).

## Protocol

This section explains the data format used within transaction data. In the actual implementation, only non-parenthesized part of the keys will be used to minimize gas fees.

### Addressbook Update

- From `self` to `self`
- Encrypted

```
{
    m(essengeth)v(ersion): "v1",
    t(ype): 0,
    a(ddresses): ["0x...", "0x..."],
    n(icks): ["John Doe", "Jane Doe"],
    d(ate): 1632679547738
}
```

### Chat Request

- Not Encrypted
- From `self` to `peer`

```
{
    m(essengeth)v(ersion): "v1",
    t(ype): 1,
    m(e): "John Doe",
    d(ate): 1632679547738
}
```

### Accept Chat Request

- Encrypted
- From `peer` to `self`

```
{
    m(essengeth)v(ersion): "v1",
    t(ype): 2,
    d(ate): 1632679547738
}
```

### Reject Chat Request

- Encrypted
- From `peer` to `self`

```
{
    m(essengeth)v(ersion): "v1",
    t(ype): 3,
    d(ate): 1632679547738
}
```

### Text Message

- Encrypted
- From `anyone` to `anyone` as long as chat is established between entities

```
{
    m(essengeth)v(ersion): "v1",
    t(ype): 4,
    c(ontent): ["A multi", "line message"],
    d(ates): [1632679547738, 1632679549738]
}
```
