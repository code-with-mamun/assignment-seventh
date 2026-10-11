(()=>{"use strict";module.exports = [
"[project]/src/app/components/AllProducts.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AllProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/priceUtils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const API_URL = "/api/products";
// Category অনুযায়ী Emoji
const CATEGORY_ICONS = {
    chal: "🍚",
    dal: "🥜",
    tel: "🛢️",
    sobji: "🥬",
    mach: "🐟",
    mangsho: "🍗",
    "dim-dui": "🥚",
    mosla: "🌶️"
};
// Product অনুযায়ী আলাদা Emoji
const PRODUCT_ICONS = {
    peyaj: "🧅",
    begun: "🍆",
    ada: "🌿",
    roshun: "🧄",
    alu: "🥔",
    "kaccha-moric": "🌶️",
    "rui-mach": "🐟",
    "ilish-mach": "🐠",
    "katla-mach": "🐟",
    "chingri-mach": "🦐",
    "goru-r-mangsho": "🥩",
    "khasir-mangsho": "🍖",
    "hanser-mangsho": "🦆",
    "murgi-r-mangsho": "🍗",
    dim: "🥚",
    "dui-dudh": "🥛",
    doi: "🥣",
    mokhhan: "🧈",
    "sorno-machi-chal": "🍚",
    "miniket-chal": "🍚",
    "nazir-chal": "🍚",
    "batam-size-chal": "🍚",
    "mosur-dal": "🥜",
    "mug-dal": "🥜",
    "chola-dal": "🥜",
    "aman-dal-khosasila": "🥜",
    "sorishar-tel": "🛢️",
    "pam-tel": "🛢️",
    "ghani-banga-sorishar-tel": "🛢️",
    "morich-gunda": "🌶️",
    "dhanepata-gunda": "🌿"
};
// Product name
function getProductName(product) {
    return product?.nameBn || product?.name || product?.title || "পণ্য";
}
// Product slug অনুযায়ী Emoji
function getProductIcon(product) {
    const slug = String(product?.slug || "").trim().toLowerCase();
    if (PRODUCT_ICONS[slug]) {
        return PRODUCT_ICONS[slug];
    }
    const category = String(product?.category || "").trim().toLowerCase();
    return CATEGORY_ICONS[category] || "🛒";
}
// Product price
function getProductPrice(product) {
    const price = product?.today ?? product?.price ?? product?.todayPrice ?? product?.today_price ?? product?.currentPrice ?? product?.current_price;
    if (price === null || price === undefined || price === "" || !Number.isFinite(Number(price))) {
        return null;
    }
    return Number(price);
}
// Unit বাংলায় দেখানো
function getUnit(unit) {
    const units = {
        kg: "কেজি",
        litre: "লিটার",
        liter: "লিটার",
        dozen: "ডজন",
        piece: "টি"
    };
    return units[String(unit || "").toLowerCase()] || unit || "";
}
function AllProducts() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        async function fetchProducts() {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(API_URL, {
                    cache: "no-store"
                });
                if (!response.ok) {
                    throw new Error("পণ্যের তথ্য লোড করা যায়নি।");
                }
                const result = await response.json();
                const productList = Array.isArray(result) ? result : Array.isArray(result?.products) ? result.products : Array.isArray(result?.data) ? result.data : Array.isArray(result?.data?.products) ? result.data.products : [];
                if (active) {
                    // সর্বোচ্চ ৩২টি পণ্য দেখাবে
                    setProducts(productList.slice(0, 32));
                    if (productList.length === 0) {
                        setError("কোনো পণ্য পাওয়া যায়নি।");
                    }
                }
            } catch (err) {
                if (active) {
                    setError(err.message || "পণ্য লোড করতে সমস্যা হয়েছে।");
                }
            } finally{
                if (active) {
                    setLoading(false);
                }
            }
        }
        fetchProducts();
        return ()=>{
            active = false;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "সব-পণ্য",
        className: "scroll-mt-24 bg-gray-50 px-4 py-12 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-wrap items-end justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-sm font-semibold text-green-700",
                                    children: "বাজারদর"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900 sm:text-3xl",
                                    children: "আজকের পণ্যের দাম"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 201,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-gray-600",
                                    children: "নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ দাম দেখুন।"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/AllProducts.jsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this),
                        !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800",
                            children: [
                                "মোট ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBanglaNumber"])(products.length),
                                " টি পণ্য"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/AllProducts.jsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/AllProducts.jsx",
                    lineNumber: 195,
                    columnNumber: 17
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                    children: Array.from({
                        length: 8
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-pulse rounded-2xl border border-gray-200 bg-white p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 h-20 w-20 rounded-xl bg-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 225,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 h-4 w-3/4 rounded bg-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 226,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 w-1/2 rounded bg-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 227,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/AllProducts.jsx",
                            lineNumber: 221,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AllProducts.jsx",
                    lineNumber: 219,
                    columnNumber: 21
                }, this),
                !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AllProducts.jsx",
                            lineNumber: 236,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>window.location.reload(),
                            className: "mt-4 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700",
                            children: "আবার চেষ্টা করুন"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AllProducts.jsx",
                            lineNumber: 238,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/AllProducts.jsx",
                    lineNumber: 235,
                    columnNumber: 21
                }, this),
                !loading && !error && products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                    children: products.map((product, index)=>{
                        const productName = getProductName(product);
                        const icon = getProductIcon(product);
                        const price = getProductPrice(product);
                        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductSlug"])(product);
                        const change = product?.change;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: slug ? `/product/${slug}` : "#সব-পণ্য",
                            className: "group rounded-2xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-green-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl leading-none",
                                        role: "img",
                                        "aria-label": productName,
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AllProducts.jsx",
                                        lineNumber: 266,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 265,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "min-h-12 text-base font-semibold text-gray-900 group-hover:text-green-700",
                                    children: productName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 276,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-lg font-bold text-green-700",
                                    children: price !== null ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBanglaNumber"])(price)} টাকা` : "দাম পাওয়া যায়নি"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 281,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-gray-500",
                                    children: [
                                        "প্রতি ",
                                        getUnit(product?.unit)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 288,
                                    columnNumber: 37
                                }, this),
                                change && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-2 text-xs font-medium ${change.dir === "up" ? "text-red-600" : change.dir === "down" ? "text-green-600" : "text-gray-500"}`,
                                    children: [
                                        change.dir === "up" ? "▲" : change.dir === "down" ? "▼" : "—",
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBanglaNumber"])(Math.abs(Number(change.pct) || 0)),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/AllProducts.jsx",
                                    lineNumber: 294,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, product?.id ?? product?.slug ?? index, true, {
                            fileName: "[project]/src/app/components/AllProducts.jsx",
                            lineNumber: 259,
                            columnNumber: 33
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AllProducts.jsx",
                    lineNumber: 250,
                    columnNumber: 21
                }, this),
                !loading && !error && products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-600",
                    children: "কোনো পণ্য পাওয়া যায়নি।"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AllProducts.jsx",
                    lineNumber: 323,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/AllProducts.jsx",
            lineNumber: 193,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/AllProducts.jsx",
        lineNumber: 189,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/PriceFallers.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PriceFallers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/priceUtils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const API_URL = "/api/products";
// Product অনুযায়ী Emoji
const PRODUCT_ICONS = {
    peyaj: "🧅",
    begun: "🍆",
    ada: "🌿",
    roshun: "🧄",
    alu: "🥔",
    "kaccha-moric": "🌶️",
    "rui-mach": "🐟",
    "ilish-mach": "🐠",
    "katla-mach": "🐟",
    "chingri-mach": "🦐",
    "goru-r-mangsho": "🥩",
    "khasir-mangsho": "🍖",
    "hanser-mangsho": "🦆",
    "murgi-r-mangsho": "🍗",
    dim: "🥚",
    "dui-dudh": "🥛",
    doi: "🥣",
    mokhhan: "🧈",
    "sorno-machi-chal": "🍚",
    "miniket-chal": "🍚",
    "nazir-chal": "🍚",
    "batam-size-chal": "🍚",
    "mosur-dal": "🥜",
    "mug-dal": "🥜",
    "chola-dal": "🥜",
    "sorishar-tel": "🫙",
    "pam-tel": "🫙",
    "ghani-banga-sorishar-tel": "🫙",
    "morich-gunda": "🌶️",
    "dhanepata-gunda": "🌿"
};
const CATEGORY_ICONS = {
    chal: "🍚",
    dal: "🥜",
    tel: "🫙",
    sobji: "🥬",
    mach: "🐟",
    mangsho: "🍗",
    "dim-dui": "🥚",
    mosla: "🌶️"
};
// Product name
function getProductName(product) {
    return product?.nameBn || product?.name || product?.title || "পণ্য";
}
// Product emoji
function getProductIcon(product) {
    const slug = String(product?.slug || "").trim().toLowerCase();
    if (PRODUCT_ICONS[slug]) {
        return PRODUCT_ICONS[slug];
    }
    const category = String(product?.category || "").trim().toLowerCase();
    // API-তে image emoji থাকলে সেটি দেখাবে
    const image = product?.image;
    if (typeof image === "string" && image.trim() && !/^https?:\/\//i.test(image)) {
        return image;
    }
    return CATEGORY_ICONS[category] || product?.categoryIcon || "🛒";
}
// Product price
function getProductPrice(product) {
    const value = product?.today ?? product?.price ?? product?.todayPrice ?? product?.today_price ?? product?.currentPrice ?? product?.current_price;
    if (value === null || value === undefined || value === "" || !Number.isFinite(Number(value))) {
        return null;
    }
    return Number(value);
}
// Price formatting
function formatPrice(value) {
    if (value === null) {
        return "দাম পাওয়া যায়নি";
    }
    const formatted = Number(value).toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBanglaNumber"])(formatted)} টাকা`;
}
// Unit বাংলায়
function getUnit(unit) {
    const units = {
        kg: "কেজি",
        litre: "লিটার",
        liter: "লিটার",
        l: "লিটার",
        gram: "গ্রাম",
        g: "গ্রাম",
        dozen: "ডজন",
        piece: "টি",
        pcs: "টি"
    };
    const normalizedUnit = String(unit || "").trim().toLowerCase();
    return units[normalizedUnit] || unit || "একক";
}
function PriceFallers() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        async function fetchProducts() {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(API_URL, {
                    cache: "no-store"
                });
                if (!response.ok) {
                    throw new Error("পণ্যের তথ্য লোড করা যায়নি।");
                }
                const data = await response.json();
                const productList = Array.isArray(data) ? data : Array.isArray(data?.products) ? data.products : Array.isArray(data?.data) ? data.data : Array.isArray(data?.data?.products) ? data.data.products : [];
                // দাম কমেছে এমন পণ্য বাছাই
                const fallers = productList.filter((product)=>{
                    const pct = Number(product?.change?.pct);
                    return product?.change?.dir === "down" && Number.isFinite(pct) && pct !== 0;
                })// সবচেয়ে বেশি দাম কমেছে এমন পণ্য আগে
                .sort((a, b)=>{
                    return Math.abs(Number(b.change.pct)) - Math.abs(Number(a.change.pct));
                })// সর্বোচ্চ ৬টি পণ্য
                .slice(0, 6);
                if (active) {
                    setProducts(fallers);
                }
            } catch (err) {
                if (active) {
                    setError(err.message || "পণ্যের তথ্য লোড করা যায়নি।");
                }
            } finally{
                if (active) {
                    setLoading(false);
                }
            }
        }
        fetchProducts();
        return ()=>{
            active = false;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#f3f8f4] px-4 py-10 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl",
                            children: "📉"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 244,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 sm:text-2xl",
                                    children: "আজ দাম কমেছে ▼"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                    lineNumber: 249,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-gray-500",
                                    children: "আজ যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 248,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                    lineNumber: 243,
                    columnNumber: 17
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: Array.from({
                        length: 6
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex animate-pulse items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-14 w-14 shrink-0 rounded-xl bg-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                    lineNumber: 268,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 h-4 w-3/4 rounded bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 271,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 h-3 w-1/2 rounded bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 272,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-2/3 rounded bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 273,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                    lineNumber: 270,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 264,
                            columnNumber: 33
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                    lineNumber: 261,
                    columnNumber: 21
                }, this),
                !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-red-100 bg-red-50 p-5 text-center text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 284,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>window.location.reload(),
                            className: "mt-3 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700",
                            children: "আবার চেষ্টা করুন"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 286,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                    lineNumber: 283,
                    columnNumber: 21
                }, this),
                !loading && !error && products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-gray-100 bg-white p-6 text-center text-gray-500",
                    children: "কোনো পণ্যের দাম কমেনি।"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                    lineNumber: 298,
                    columnNumber: 21
                }, this),
                !loading && !error && products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: products.map((product, index)=>{
                        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductSlug"])(product);
                        const name = getProductName(product);
                        const icon = getProductIcon(product);
                        const price = getProductPrice(product);
                        const percentage = Math.abs(Number(product?.change?.pct) || 0);
                        const cardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-3xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                role: "img",
                                                "aria-label": name,
                                                children: icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PriceFallers.jsx",
                                                lineNumber: 321,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 320,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "truncate text-lg font-semibold text-gray-900 group-hover:text-green-700",
                                                    children: name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-gray-500",
                                                    children: [
                                                        "প্রতি",
                                                        " ",
                                                        getUnit(product?.unit)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 329,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                    lineNumber: 319,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-end justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "আজকের দাম"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                                    lineNumber: 344,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 break-words text-lg font-bold text-gray-900",
                                                    children: formatPrice(price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 343,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 rounded-full bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600",
                                            children: [
                                                "▼",
                                                " ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBanglaNumber"])(percentage.toFixed(1)),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                                            lineNumber: 354,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                                    lineNumber: 342,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 317,
                            columnNumber: 33
                        }, this);
                        return slug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/product/${slug}`,
                            className: "group block rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-md",
                            children: cardContent
                        }, product?.id ?? slug, false, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 366,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",
                            children: cardContent
                        }, product?.id ?? index, false, {
                            fileName: "[project]/src/app/components/PriceFallers.jsx",
                            lineNumber: 374,
                            columnNumber: 33
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PriceFallers.jsx",
                    lineNumber: 305,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/PriceFallers.jsx",
            lineNumber: 240,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PriceFallers.jsx",
        lineNumber: 239,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/PriceRisers.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PriceRisers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/priceUtils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const API_URL = "/api/products";
// Category অনুযায়ী Emoji
const CATEGORY_ICONS = {
    chal: "🍚",
    dal: "🥜",
    tel: "🫙",
    sobji: "🥬",
    mach: "🐟",
    mangsho: "🍗",
    "dim-dui": "🥚",
    mosla: "🌶️"
};
// Product অনুযায়ী Emoji
const PRODUCT_ICONS = {
    peyaj: "🧅",
    begun: "🍆",
    ada: "🌿",
    roshun: "🧄",
    alu: "🥔",
    "kaccha-moric": "🌶️",
    "rui-mach": "🐟",
    "ilish-mach": "🐠",
    "katla-mach": "🐠",
    "chingri-mach": "🦐",
    "goru-r-mangsho": "🥩",
    "khasir-mangsho": "🍖",
    "hanser-mangsho": "🦆",
    "murgi-r-mangsho": "🍗",
    dim: "🥚",
    "dui-dudh": "🥛",
    doi: "🥣",
    mokhhan: "🧈",
    "sorno-machi-chal": "🍚",
    "miniket-chal": "🍚",
    "nazir-chal": "🍚",
    "batam-size-chal": "🍚",
    "mosur-dal": "🥜",
    "mug-dal": "🥜",
    "chola-dal": "🥜",
    "aman-dal-khosasila": "🥜",
    "sorishar-tel": "🫙",
    "pam-tel": "🫙",
    "ghani-banga-sorishar-tel": "🫙",
    "morich-gunda": "🌶️",
    "dhanepata-gunda": "🌿"
};
// বাংলা সংখ্যা ও comma format
function toBanglaNumber(value) {
    if (value === null || value === undefined || value === "") {
        return "";
    }
    return String(value).replace(/\d/g, (digit)=>"০১২৩৪৫৬৭৮৯"[Number(digit)]);
}
// Product name
function getProductName(product) {
    return product?.nameBn || product?.name || product?.title || "পণ্য";
}
// Product emoji
function getProductIcon(product) {
    const slug = String(product?.slug || "").trim().toLowerCase();
    if (PRODUCT_ICONS[slug]) {
        return PRODUCT_ICONS[slug];
    }
    const category = String(product?.category || "").trim().toLowerCase();
    return CATEGORY_ICONS[category] || "🛒";
}
// Price
function getProductPrice(product) {
    const value = product?.today ?? product?.price ?? product?.todayPrice ?? product?.today_price ?? product?.currentPrice ?? product?.current_price;
    if (value === null || value === undefined || value === "" || !Number.isFinite(Number(value))) {
        return null;
    }
    return Number(value);
}
// Price format: 1,850 → ১,৮৫০
function formatPrice(value) {
    if (value === null) {
        return "দাম পাওয়া যায়নি";
    }
    const formatted = Number(value).toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
    return `${toBanglaNumber(formatted)} টাকা`;
}
// Unit
function getUnit(unit) {
    const units = {
        kg: "কেজি",
        litre: "লিটার",
        liter: "লিটার",
        dozen: "ডজন",
        piece: "পিস"
    };
    return units[String(unit || "").toLowerCase()] || unit || "একক";
}
function PriceRisers() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        async function fetchProducts() {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(API_URL, {
                    cache: "no-store"
                });
                if (!response.ok) {
                    throw new Error("পণ্যের তথ্য লোড করা যায়নি।");
                }
                const data = await response.json();
                const productList = Array.isArray(data) ? data : Array.isArray(data?.products) ? data.products : Array.isArray(data?.data) ? data.data : Array.isArray(data?.data?.products) ? data.data.products : [];
                if (isMounted) {
                    setProducts(productList);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || "পণ্য লোড করতে সমস্যা হয়েছে।");
                }
            } finally{
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        fetchProducts();
        return ()=>{
            isMounted = false;
        };
    }, []);
    // দাম বাড়া পণ্য: বেশি percentage আগে, সর্বোচ্চ ৬টি
    const risingProducts = products.filter((product)=>product?.change?.dir === "up" && Number.isFinite(Number(product?.change?.pct)) && Number(product.change.pct) > 0).sort((a, b)=>Number(b.change.pct) - Number(a.change.pct)).slice(0, 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "price-risers",
        className: "w-full bg-white py-8 sm:py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl",
                            children: "📈"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 222,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 sm:text-2xl",
                                    children: "আজ দাম বেড়েছে ▲"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 227,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-gray-500",
                                    children: "আজ যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 231,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                    lineNumber: 221,
                    columnNumber: 17
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: Array.from({
                        length: 6
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-32 animate-pulse items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-14 w-14 shrink-0 rounded-xl bg-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 245,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 h-4 w-3/4 rounded bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 248,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-1/2 rounded bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 249,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 247,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 241,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                    lineNumber: 239,
                    columnNumber: 21
                }, this),
                !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-600",
                    children: [
                        error,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>window.location.reload(),
                            className: "ml-3 font-semibold underline",
                            children: "আবার চেষ্টা করুন"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 261,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                    lineNumber: 258,
                    columnNumber: 21
                }, this),
                !loading && !error && risingProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-gray-100 bg-gray-50 p-6 text-center text-gray-500",
                    children: "আজ দাম বেড়েছে এমন কোনো পণ্য পাওয়া যায়নি।"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                    lineNumber: 275,
                    columnNumber: 25
                }, this),
                !loading && !error && risingProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: risingProducts.map((product, index)=>{
                        const name = getProductName(product);
                        const icon = getProductIcon(product);
                        const price = getProductPrice(product);
                        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$priceUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductSlug"])(product);
                        const percentage = Math.abs(Number(product.change.pct));
                        const cardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        role: "img",
                                        "aria-label": name,
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PriceRisers.jsx",
                                        lineNumber: 298,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 297,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "truncate font-semibold text-gray-800 group-hover:text-green-700",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 308,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-gray-500",
                                            children: [
                                                "প্রতি ",
                                                getUnit(product.unit)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 312,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-gray-500",
                                            children: "আজকের দাম"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 316,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-gray-900",
                                            children: formatPrice(price)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 320,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 307,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 self-center rounded-lg bg-green-50 px-2.5 py-2 text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-green-700",
                                            children: [
                                                "▲ ",
                                                toBanglaNumber(percentage.toFixed(1)),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 327,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-xs text-green-700",
                                            children: "দাম বেড়েছে"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                                            lineNumber: 333,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                                    lineNumber: 326,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 295,
                            columnNumber: 37
                        }, this);
                        return slug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/product/${slug}`,
                            className: "group flex min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md sm:gap-4 sm:p-4",
                            children: cardContent
                        }, product.id ?? slug ?? index, false, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 341,
                            columnNumber: 37
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:gap-4 sm:p-4",
                            children: cardContent
                        }, product.id ?? index, false, {
                            fileName: "[project]/src/app/components/PriceRisers.jsx",
                            lineNumber: 349,
                            columnNumber: 37
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PriceRisers.jsx",
                    lineNumber: 284,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/PriceRisers.jsx",
            lineNumber: 218,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PriceRisers.jsx",
        lineNumber: 214,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/priceUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Convert English numbers to Bangla numbers
__turbopack_context__.s([
    "getProductSlug",
    ()=>getProductSlug,
    "toBanglaNumber",
    ()=>toBanglaNumber
]);
const toBanglaNumber = (value)=>{
    if (value === null || value === undefined || value === "") {
        return "";
    }
    const banglaDigits = "০১২৩৪৫৬৭৮৯";
    return String(value).replace(/\d/g, (digit)=>{
        return banglaDigits[Number(digit)];
    });
};
const getProductSlug = (product)=>{
    if (!product) {
        return "";
    }
    if (product.slug) {
        return product.slug;
    }
    const name = product.nameBn || product.name || "";
    return String(name).toLowerCase().trim().replace(/\s+/g, "-");
};
}),
];})()

//# sourceMappingURL=src_app_components_1twy5g-21cwpu._.js.map