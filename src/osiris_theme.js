
export const osiris_theme = {
    name: 'osiris_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #00C58D 
		"--color-primary-50": "217 246 238", // #d9f6ee
		"--color-primary-100": "204 243 232", // #ccf3e8
		"--color-primary-200": "191 241 227", // #bff1e3
		"--color-primary-300": "153 232 209", // #99e8d1
		"--color-primary-400": "77 214 175", // #4dd6af
		"--color-primary-500": "0 197 141", // #00C58D
		"--color-primary-600": "0 177 127", // #00b17f
		"--color-primary-700": "0 148 106", // #00946a
		"--color-primary-800": "0 118 85", // #007655
		"--color-primary-900": "0 97 69", // #006145
		// secondary | #68EEC6 
		"--color-secondary-50": "232 252 246", // #e8fcf6
		"--color-secondary-100": "225 252 244", // #e1fcf4
		"--color-secondary-200": "217 251 241", // #d9fbf1
		"--color-secondary-300": "195 248 232", // #c3f8e8
		"--color-secondary-400": "149 243 215", // #95f3d7
		"--color-secondary-500": "104 238 198", // #68EEC6
		"--color-secondary-600": "94 214 178", // #5ed6b2
		"--color-secondary-700": "78 179 149", // #4eb395
		"--color-secondary-800": "62 143 119", // #3e8f77
		"--color-secondary-900": "51 117 97", // #337561
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cdae 
		"--color-success-50": "237 248 243", // #edf8f3
		"--color-success-100": "230 245 239", // #e6f5ef
		"--color-success-200": "224 243 235", // #e0f3eb
		"--color-success-300": "206 235 223", // #ceebdf
		"--color-success-400": "169 220 198", // #a9dcc6
		"--color-success-500": "132 205 174", // #84cdae
		"--color-success-600": "119 185 157", // #77b99d
		"--color-success-700": "99 154 131", // #639a83
		"--color-success-800": "79 123 104", // #4f7b68
		"--color-success-900": "65 100 85", // #416455
		// warning | #EEE568 
		"--color-warning-50": "252 251 232", // #fcfbe8
		"--color-warning-100": "252 250 225", // #fcfae1
		"--color-warning-200": "251 249 217", // #fbf9d9
		"--color-warning-300": "248 245 195", // #f8f5c3
		"--color-warning-400": "243 237 149", // #f3ed95
		"--color-warning-500": "238 229 104", // #EEE568
		"--color-warning-600": "214 206 94", // #d6ce5e
		"--color-warning-700": "179 172 78", // #b3ac4e
		"--color-warning-800": "143 137 62", // #8f893e
		"--color-warning-900": "117 112 51", // #757033
		// error | #C76148 
		"--color-error-50": "247 231 228", // #f7e7e4
		"--color-error-100": "244 223 218", // #f4dfda
		"--color-error-200": "241 216 209", // #f1d8d1
		"--color-error-300": "233 192 182", // #e9c0b6
		"--color-error-400": "216 144 127", // #d8907f
		"--color-error-500": "199 97 72", // #C76148
		"--color-error-600": "179 87 65", // #b35741
		"--color-error-700": "149 73 54", // #954936
		"--color-error-800": "119 58 43", // #773a2b
		"--color-error-900": "98 48 35", // #623023
		// surface | #f3f3f3 
		"--color-surface-50": "253 253 253", // #fdfdfd
		"--color-surface-100": "253 253 253", // #fdfdfd
		"--color-surface-200": "252 252 252", // #fcfcfc
		"--color-surface-300": "250 250 250", // #fafafa
		"--color-surface-400": "247 247 247", // #f7f7f7
		"--color-surface-500": "243 243 243", // #f3f3f3
		"--color-surface-600": "219 219 219", // #dbdbdb
		"--color-surface-700": "182 182 182", // #b6b6b6
		"--color-surface-800": "146 146 146", // #929292
		"--color-surface-900": "119 119 119", // #777777
		
	}
}