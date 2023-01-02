import "./style.css";
import { Product } from "container";
import IMG from "assets/images/product.png";
import { useViewportSize } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown } from "components";
import { Container, Grid, NumberInput } from "@mantine/core";
import { ReactComponent as Sort1 } from "assets/images/sort1.svg";
import { ReactComponent as Sort2 } from "assets/images/sort2.svg";
import { ReactComponent as Close } from "assets/images/close.svg";

function Products() {
  const { width } = useViewportSize();
  const [currency, setCurrency] = useState("");
  const [upPrice, setUpPrice] = useState<any>();
  const [downPrice, setDownPrice] = useState<any>();
  const [category, setCategory] = useState("");
  const [sortCard, setSortCard] = useState(3);
  const [sortMobileCard, setSortMobileCard] = useState(6);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      index: 1,
      value: "ETH",
    },
    {
      index: 2,
      value: "ETH",
    },
    {
      index: 3,
      value: "ETH",
    },
    {
      index: 4,
      value: "ETH",
    },
  ];

  const dataCategory = [
    {
      index: 1,
      value: "Новый год",
    },
    {
      index: 2,
      value: "Новый год",
    },
    {
      index: 3,
      value: "Новый год",
    },
    {
      index: 4,
      value: "Новый год",
    },
  ];

  const dateItems = [
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
  ];

  const clearFilter = () => {
    setCurrency("");
    setUpPrice(null);
    setDownPrice(null);
    setCategory("");
  };

  return (
    <Container size={"xl"}>
      <div className="products">
        {width > 991 ? (
          <>
            <div className="products__flex">
              <div className="left">
                <Dropdown
                  shadow={"md"}
                  title={"Валюта"}
                  width={150}
                  position={"bottom-end"}
                  items={data}
                  onClick={(e: any) => setCurrency(e?.value)}
                />
                <NumberInput
                  type="number"
                  radius="md"
                  className="input"
                  placeholder="Цена от"
                  hideControls
                  min={0}
                  value={upPrice}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                  formatter={(value: any) =>
                    !Number.isNaN(parseFloat(value))
                      ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "")
                      : ""
                  }
                  onChange={(value: any) => setUpPrice(value)}
                />
                <NumberInput
                  type="number"
                  radius="md"
                  className="input"
                  placeholder="Цена до"
                  hideControls
                  min={0}
                  value={downPrice}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                  formatter={(value: any) =>
                    !Number.isNaN(parseFloat(value))
                      ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "")
                      : ""
                  }
                  onChange={(value: any) => setDownPrice(value)}
                />
                <Dropdown
                  shadow={"md"}
                  title={"Категория"}
                  width={150}
                  position={"bottom-end"}
                  items={dataCategory}
                  onClick={(e: any) => setCategory(e?.value)}
                />
                <Button onClick={() => clearFilter()}>Очистить все</Button>
              </div>
              <div className="right">
                <Button onClick={() => setSortCard(3)}>
                  <Sort1 className={sortCard === 3 ? "active" : "inactive"} />
                </Button>
                <Button onClick={() => setSortCard(4)}>
                  <Sort2 className={sortCard === 4 ? "active" : "inactive"} />
                </Button>
              </div>
            </div>
            <div className="product__filter">
              {!!currency ? (
                <div className="box">
                  <p>{currency}</p>
                  <Close onClick={() => setCurrency("")} />
                </div>
              ) : null}

              {!!upPrice || !!downPrice ? (
                <div className="box">
                  <p>
                    {!!upPrice ? `от ${upPrice}` : ""}{" "}
                    {!!downPrice ? `до ${downPrice}` : ""}
                  </p>
                  <Close
                    onClick={() => {
                      setUpPrice(null);
                      setDownPrice(null);
                    }}
                  />
                </div>
              ) : null}

              {!!category ? (
                <div className="box">
                  <p>{category}</p>
                  <Close onClick={() => setCategory("")} />
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div className="products__flex">
              <div className="left">
                <Button onClick={() => clearFilter()}>Очистить все</Button>
              </div>
              <div className="right">
                <Button onClick={() => setSortMobileCard(12)}>
                  <Sort1
                    className={sortMobileCard === 12 ? "active" : "inactive"}
                  />
                </Button>
                <Button onClick={() => setSortMobileCard(6)}>
                  <Sort2
                    className={sortMobileCard === 6 ? "active" : "inactive"}
                  />
                </Button>
              </div>
            </div>
            <div className="products__flex">
              <div className="left">
                <Dropdown
                  shadow={"md"}
                  title={"Валюта"}
                  width={150}
                  position={"bottom-end"}
                  items={data}
                  onClick={(e: any) => setCurrency(e?.value)}
                />
                <NumberInput
                  type="number"
                  radius="md"
                  className="input"
                  placeholder="Цена от"
                  hideControls
                  min={0}
                  value={upPrice}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                  formatter={(value: any) =>
                    !Number.isNaN(parseFloat(value))
                      ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "")
                      : ""
                  }
                  onChange={(value: any) => setUpPrice(value)}
                />
                <NumberInput
                  type="number"
                  radius="md"
                  className="input"
                  placeholder="Цена до"
                  hideControls
                  min={0}
                  value={downPrice}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                  formatter={(value: any) =>
                    !Number.isNaN(parseFloat(value))
                      ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "")
                      : ""
                  }
                  onChange={(value: any) => setDownPrice(value)}
                />
                <Dropdown
                  shadow={"md"}
                  title={"Категория"}
                  width={150}
                  position={"bottom-end"}
                  items={dataCategory}
                  onClick={(e: any) => setCategory(e?.value)}
                />
              </div>
            </div>
            <div className="product__filter">
              {!!currency ? (
                <div className="box">
                  <p>{currency}</p>
                  <Close onClick={() => setCurrency("")} />
                </div>
              ) : null}

              {!!upPrice || !!downPrice ? (
                <div className="box">
                  <p>
                    {!!upPrice ? `от ${upPrice}` : ""}{" "}
                    {!!downPrice ? `до ${downPrice}` : ""}
                  </p>
                  <Close
                    onClick={() => {
                      setUpPrice(null);
                      setDownPrice(null);
                    }}
                  />
                </div>
              ) : null}

              {!!category ? (
                <div className="box">
                  <p>{category}</p>
                  <Close onClick={() => setCategory("")} />
                </div>
              ) : null}
            </div>
          </>
        )}

        <div className="products__items">
          <Grid>
            {dateItems?.map((d: any, index: number) => (
              <Grid.Col span={sortMobileCard} md={sortCard} key={index}>
                <Card
                  image={d.image}
                  title={d.title}
                  price={d.price}
                  new_d={d.new}
                  setOpened={() => setOpened(true)}
                />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
      <Product opened={opened} setOpened={setOpened} />
    </Container>
  );
}

export default Products;
