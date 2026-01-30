import {Outlet, useNavigate} from "react-router";
import {ActionIcon, AppShell, Group} from "@mantine/core";
import {colors} from "../Colors.ts";
import {Globe, LayoutDashboard, Moon, Sun} from "lucide-react";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {DefaultText, Header} from "../Components/Atomy/Label.tsx";
import {ctxAuth} from "../utils/CtxAuth.tsx";
import {Button} from "../Components/Atomy/Button/Button.tsx";
import {Dropdown} from "../Components/Atomy/Dropdown/Dropdown.tsx";
import {profiles} from "../fakeAPI.ts";

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
  const {t, i18n} = useTranslation("common")
  const toggleLang = async () => {
    const newLanguage = i18n.language === "en" ? "pl" : "en"
    await i18n.changeLanguage(newLanguage)
  }
  const {auth, setAuth} = useContext(ctxAuth);
  const navigate = useNavigate()
  const logout = () => {
    if (setAuth)
      setAuth({
        login: null,
      });
  }
  return <>
    <AppShell bg={colors.background} header={{height: "60px"}}>
      <AppShell.Header p={'10px'} bg={colors.widget} withBorder={false}>
        <Group justify={"space-between"}>
          <Group>
            <ActionIcon variant={'subtle'} color={colors.text} onClick={() => navigate('/')}>
              <LayoutDashboard/>
            </ActionIcon>
            <Header size={'lg'}>{t("title")}</Header>
          </Group>
          <Group>
            {auth?.login !== null && (
              <>
                <DefaultText>{auth?.login}</DefaultText>
                <Button variant={'danger'} onClick={logout}>{t('logout')}</Button>
                <Dropdown value={auth?.profile ?? 'Err'}
                          onChange={(event) => {
                            const value = event.currentTarget.value
                            if (profiles.includes(value) && setAuth) {
                              setAuth({...auth, profile: value})
                            }
                          }}
                          data={profiles}/>
              </>

            )}
            <ActionIcon variant={"subtle"} color={colors.text} onClick={toggleLang}>
              <Globe/>
            </ActionIcon>
            <ActionIcon variant={"subtle"} color={colors.text} onClick={toggleTheme}>
              {theme === "dark" ? <Sun/> : <Moon/>}
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main mx={'20px'}>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  </>
}