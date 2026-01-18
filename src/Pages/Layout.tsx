import {Outlet} from "react-router";
import {ActionIcon, AppShell, Group, Text} from "@mantine/core";
import {colors} from "../Colors.ts";
import {Globe, Moon, Sun} from "lucide-react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export function Layout() {
  const getTheme = () => {
    return document.documentElement.getAttribute("data-theme")
  }
  const [theme, setTheme] = useState(getTheme())
  const toggleTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
    setTheme(getTheme())
  };
  const {i18n} = useTranslation()
  const toggleLang = async () => {
    const newLanguage = i18n.language === "en" ? "pl" : "en"
    await i18n.changeLanguage(newLanguage)
  }
  return <>
    <AppShell bg={colors.background} header={{height: "40px"}}>
      <AppShell.Header bg={colors.widget} withBorder={false}>
        <Group justify={"space-between"}>
          <Text size={'lg'}>Panel</Text>
          <Group>
            <ActionIcon variant={"subtle"} color={colors.text} onClick={toggleLang}>
              <Globe/>
            </ActionIcon>
            <ActionIcon variant={"subtle"} color={colors.text} onClick={toggleTheme}>
              {theme === "dark" ? <Sun/> : <Moon/>}
            </ActionIcon>
          </Group>

        </Group>

      </AppShell.Header>
      <AppShell.Main m={'20px'}>
        <Outlet/>
      </AppShell.Main>
    </AppShell>

  </>
}