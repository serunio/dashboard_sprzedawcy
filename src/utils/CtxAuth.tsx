import {type Context, createContext, type Dispatch, type SetStateAction} from "react";

export const ctxAuth: Context<{
  auth?: {login?: string | null, profile?: string | null},
  setAuth?: Dispatch<SetStateAction<{
    login?: string | null,
    profile?: string | null
  }>>

}> = createContext({})