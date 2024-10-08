import { propertyDescriptions } from "@webstudio-is/css-data";
import type { StyleProperty, UnitValue } from "@webstudio-is/css-engine";
import { Grid, theme } from "@webstudio-is/design-system";
import { CssValueInputContainer } from "../../shared/css-value-input";
import type { SectionProps } from "../shared/section";
import { styleConfigByName } from "../../shared/configs";
import { getStyleSource } from "../../shared/style-info";
import { PropertyLabel } from "../../property-label";

const property: StyleProperty = "outlineOffset";
const defaultOutlineOffsetValue: UnitValue = {
  type: "unit",
  value: 0,
  unit: "number",
};

export const OutlineOffset = (
  props: Pick<SectionProps, "currentStyle" | "setProperty" | "deleteProperty">
) => {
  const { deleteProperty, setProperty, currentStyle } = props;
  const outlineOffsetValue =
    currentStyle[property]?.value ?? defaultOutlineOffsetValue;
  const outlineOffsetStyleConfig = styleConfigByName(property);
  const outlineOffsetWidthKeywords = outlineOffsetStyleConfig.items.map(
    (item) => ({
      type: "keyword" as const,
      value: item.name,
    })
  );

  return (
    <Grid
      css={{
        gridTemplateColumns: `1fr ${theme.spacing[20]}`,
      }}
      gap={2}
    >
      <PropertyLabel
        label="Offset"
        description={propertyDescriptions.outlineOffset}
        properties={["outlineOffset"]}
      />

      <CssValueInputContainer
        property={property}
        styleSource={getStyleSource(currentStyle[property])}
        keywords={outlineOffsetWidthKeywords}
        setValue={setProperty(property)}
        deleteProperty={deleteProperty}
        value={outlineOffsetValue}
      />
    </Grid>
  );
};
