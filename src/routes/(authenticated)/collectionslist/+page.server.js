import { auth } from "$lib/auth"
import { AUTH_TOKEN_EXPIRY_SECONDS } from "$lib/constants.server"
import { invalid, redirect } from "@sveltejs/kit"
import debug from "debug"
