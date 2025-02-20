import { USER_ACTION_TYPES } from './user.types';
import { createAction, withmatcher, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { UserData, AdditionalInformation } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>;

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: User, additionalDetails: AdditionalInformation}>;

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const checkUserSession = withmatcher((): CheckUserSession =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const setCurrentUser = withmatcher((user: UserData): SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const googleSignInStart = withmatcher((): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withmatcher((email: string, password: string): EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withmatcher((user: UserData & { id: string }): SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withmatcher((error): SignInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = withmatcher((email: string, password: string, displayName: string): SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));

export const signUpSuccess = withmatcher((user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const signUpFailed = withmatcher((error): SignUpFailed =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = withmatcher((): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withmatcher((): SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withmatcher((error): SignOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
