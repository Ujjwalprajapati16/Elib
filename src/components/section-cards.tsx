"use client";

import { IconBook, IconShoppingCart, IconUsers, IconStar } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      {/* Total Books */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Books</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            12
            {/* TODO: Replace with dynamic data from backend */}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconBook />
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="font-medium">Books published by you</div>
        </CardFooter>
      </Card>

      {/* Total Sales */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Sales</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
            {/* TODO: Replace with dynamic data from backend */}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">+12%</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="font-medium">Books sold this month</div>
        </CardFooter>
      </Card>

      {/* Active Readers */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Readers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            567
            {/* TODO: Replace with dynamic data from backend */}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">+8%</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="font-medium">Readers engaged with your books</div>
        </CardFooter>
      </Card>

      {/* New Reviews */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Reviews</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            23
            {/* TODO: Replace with dynamic data from backend */}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconStar />
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="font-medium">Reviews received this month</div>
        </CardFooter>
      </Card>
    </div>
  );
}
