import React from "react";
import Title from "../../components/Title";
import { Divider } from "../Home";
import styled from "styled-components";
function Description() {
  return (
    <>
      {" "}
      <div
        style={{
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          borderBottom: "4px solid rgb(31, 164, 124)",
        }}
      >
        <Divider height={"3rem"} />
        <Title Font="21px" mobile={false} color="Black" title="Description" />
      </div>
      <Container>
        <p>
          <b>Product description:&nbsp;</b>
        </p>
        <p>
          this product is used for head, neck, chest, abdomen, perineum and
          limbs surgery and obstetrics and gynecology, ophthalmology,
          Otolaryngology, orthopedics and other operations in hospital operating
          rooms.
        </p>
        <p>
          <b>&nbsp;The product has unique advantages:&nbsp;</b>
        </p>
        <p>
          1. The Angle adjustment of the back board and leg board of the
          integrated operating table is realized by hand-operated worm, gear and
          rack mechanism.&nbsp;
        </p>
        <p>
          2. table and cover material according to user needs to choose
          high-quality cold-rolled carbon steel spray plastic or high-grade
          stainless steel.&nbsp;
        </p>
        <p>
          3. the use of oil pump hydraulic lift, surgical position adjustment
          required on both sides of the table control.&nbsp;
        </p>
      </Container>
      <br />
    </>
  );
}

export default Description;
export const Container = styled.div`
  border: 1px solid #e5e5e5;

  border-radius: 4px;
  width: 92vw;
  height: fit-content;
  margin: auto;
  padding: 2rem 2rem;
  @media (max-width: 700px) {
    width: 97vw;
    padding: 30px 15px;
  }
`;
