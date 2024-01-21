import createLocalesSettings from "./createLocalesSettings.js";
const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

test("createLocalesSettings function", () => {
  const localesSettings = createLocalesSettings();

  expect(Object.keys(localesSettings)).toEqual(LOCALES);

  expect(localesSettings["EN"]).toEqual({ id: 0, enabled: true });

  LOCALES.slice(1).forEach((locale) => {
    expect(localesSettings[locale]).toEqual({
      id: expect.any(Number),
      enabled: false,
    });
  });
});
