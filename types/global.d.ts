export { };

/**
 * 现在声明进入全局命名空间的类型，或者增加全局命名空间中的现有声明。
 */
declare global {
	// type HtmlContext = Record<"body" | "bodyAppend" | "bodyAttrs" | "bodyPrepend" | "head" | "htmlAttrs", string[]>;

	/**
	 * 布尔型及其字符串形式。
	 */
	type Booleanish = boolean | "true" | "false";
	/**
	 * 数字及其字符串形式。
	 */
	type Numberish = number | string;
	/**
	 * 任何人类可直接读的类型，包括字符串、数字、大数。
	 */
	type Readable = string | number | bigint;
	/**
	 * 任何可作为 JavaScript 对象键名的类型，包括字符串、数字、符号。
	 */
	type ObjectKey = string | number | symbol;
	/**
	 * 你想绕过警告使用 any？
	 */
	type Any = Parameters<typeof alert>[0];
	/**
	 * 管它是啥反正是对象就是了。
	 */
	type AnyObject = Record<ObjectKey, Any>;
}
