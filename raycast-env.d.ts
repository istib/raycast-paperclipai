/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Paperclip Base URL - Base URL of your Paperclip server, for example http://127.0.0.1:3100 */
  "apiBaseUrl": string,
  /** Auth Mode - Authentication strategy for Paperclip requests */
  "authMode": "none" | "bearer" | "custom_header",
  /** Bearer Token - Used when Auth Mode is set to Bearer Token */
  "apiKey"?: string,
  /** Custom Header Name - Used when Auth Mode is set to Custom Header */
  "customAuthHeaderName"?: string,
  /** Custom Header Value - Used when Auth Mode is set to Custom Header */
  "customAuthHeaderValue"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-issues` command */
  export type SearchIssues = ExtensionPreferences & {}
  /** Preferences accessible in the `review-blocked-issues` command */
  export type ReviewBlockedIssues = ExtensionPreferences & {}
  /** Preferences accessible in the `create-issue` command */
  export type CreateIssue = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-issues` command */
  export type SearchIssues = {}
  /** Arguments passed to the `review-blocked-issues` command */
  export type ReviewBlockedIssues = {}
  /** Arguments passed to the `create-issue` command */
  export type CreateIssue = {}
}

