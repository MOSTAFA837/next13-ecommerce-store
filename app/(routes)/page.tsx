import getBillboard from "@/actions/get-billboard";
import billboard from "@/components/billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("0cfbfae6-6483-447c-bdb6-ec9f6487a400");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
