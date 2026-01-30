import {useContext, useRef} from "react";
import {ctxAuth as CtxAuth} from './../utils/CtxAuth.tsx'
import {useNavigate} from "react-router";
import {Button} from "../Components/Atomy/Button/Button.tsx";
import {DefaultText, Header} from "../Components/Atomy/Label.tsx";
import {Input} from "../Components/Atomy/Input/Input.tsx";
import {useTranslation} from "react-i18next";
import {Center, Stack} from "@mantine/core";
import {profiles} from "../fakeAPI.ts";

export function LoginPage() {
  const refLogin = useRef<HTMLInputElement | null>(null);
  const {setAuth} = useContext(CtxAuth);
  const navigate = useNavigate();
  const {t} = useTranslation('common')
  const login = () => {
    if (refLogin?.current?.value && setAuth) {
      setAuth({login: refLogin.current.value, profile: profiles[0]});
      navigate("/");
    }
  };
  return (
    <>
      <Center p={'20'}>
        <Stack gap={'sm'} w={'300'}>
          <Header>{t('loginPage')}</Header>
          <DefaultText>{t('username')}:</DefaultText>
          <Input ref={refLogin}/>
          <Button variant={'filled'} onClick={login}>{t('login')}</Button>
        </Stack>
      </Center>


    </>
  );
}