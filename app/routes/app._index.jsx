import {
  Page,
  Text,
  Card,
  BlockStack,
  Box,
  InlineGrid,
  Divider,
  useBreakpoints,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import React from "react";
import { Button, TextField } from "../components";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  const { smUp } = useBreakpoints();
  const handleClick = () => alert("Your form is submitted.");

  return (
    <Page>
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Personal Details
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextField label="Name" />
              <TextField label="Email" />
            </BlockStack>
          </Card>
        </InlineGrid>
        {smUp ? <Divider /> : null}
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Location
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <TextField label="City" />
              <TextField label="Street" />
            </BlockStack>
          </Card>
        </InlineGrid>

        <BlockStack gap="400">
          <Box
            display="flex"
            justify-content="flex-end"
            width="100%"
            padding={{ xs: "0 400" }}
          >
            <Button label="submit" onClick={handleClick} primary />
          </Box>
        </BlockStack>
      </BlockStack>
    </Page>
  );
}
