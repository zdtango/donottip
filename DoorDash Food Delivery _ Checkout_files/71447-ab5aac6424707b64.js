"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71447,82147],{782147:function(n,e,t){t.d(e,{BE:function(){return nf},Bc:function(){return nc},Ci:function(){return nh},PJ:function(){return Q},Xi:function(){return nb},gw:function(){return nx},h7:function(){return nF},i3:function(){return H},oF:function(){return nS},oM:function(){return ng},ow:function(){return nI},rG:function(){return Y},sM:function(){return nd},tS:function(){return q},xD:function(){return np},xM:function(){return G},y7:function(){return ns}});var i=t(336494),r=t(74800),a=t(208738),l=t(709942),o=t(522062),s=t(164853);function u(){let n=(0,i._)(["\n  fragment RetailFeedHeaderFragment on RetailFeedHeader {\n    title\n    description\n    store {\n      id\n      name\n      businessId\n      menuId\n    }\n  }\n"]);return u=function(){return n},n}function c(){let n=(0,i._)(["\n  fragment metaDataFragment on ConvenienceProductMetadata {\n    soldAsInfo {\n      measurementUnit\n      measurementFactor {\n        decimalPlaces\n        unitAmount\n      }\n      measurementPrice {\n        currency\n        displayString\n        decimalPlaces\n        unitAmount\n      }\n    }\n    increment {\n      decimalPlaces\n      unitAmount\n    }\n    estimationInfo {\n      approximateSoldAsQuantity {\n        decimalPlaces\n        unitAmount\n      }\n      approximateSoldAsUnit\n    }\n    marketplaceUnit\n  }\n"]);return c=function(){return n},n}function d(){let n=(0,i._)(["\n  fragment BusinessInfoFragment on RetailBusinessInfo {\n    id\n    name\n    verticalId\n  }\n"]);return d=function(){return n},n}function m(){let n=(0,i._)(["\n  fragment StoreHeaderFragment on StoreHeader {\n    id\n    name\n    description\n    savelists {\n      id\n    }\n    offersDelivery\n    isConvenience\n    isDashpassPartner\n    isShippingOnly\n    business {\n      name\n      link\n    }\n\n    deliveryFeeLayout {\n      title\n      subtitle\n      isSurging\n      displayDeliveryFee\n      discountedFeeLayout {\n        title\n        subtitle\n        strikethroughText\n        strikethroughTextColor\n      }\n      pricingDisclosureInfo\n    }\n    deliveryFeeTooltip {\n      title\n      description\n      additionalSections {\n        title\n        description\n        bulletDescriptions\n      }\n    }\n    distanceBasedPricingLayout {\n      title\n      tooltip {\n        title\n        description\n      }\n    }\n    coverImgUrl\n    coverSquareImgUrl\n    businessHeaderImgUrl\n    ratings {\n      numRatings\n      numRatingsDisplayString\n      averageRating\n      isNewlyAdded\n    }\n    distanceFromConsumer {\n      value\n      label\n    }\n    priceRangeDisplayString\n    priceRange\n    status {\n      delivery {\n        isAvailable\n        minutes\n        displayUnavailableStatus\n        unavailableReason\n        isTooFarFromConsumer\n        isStoreInactive\n        etaDisplayString\n        etaDisplayIcon\n      }\n    }\n    asapStatus {\n      operatingSummaryLayout {\n        title\n        titleColor\n        subtitle\n      }\n      numMinutesUntilClose\n    }\n    asapPickupStatus {\n      numMinutesUntilClose\n    }\n    liquorLicenseLayout {\n      title\n      actionUrl\n    }\n    serviceFeeLayout {\n      title\n      subtitle\n      iconUrl\n      actionUrl\n      tooltip {\n        title\n        description\n        buttons {\n          text\n          action\n        }\n        banners {\n          title\n          titleLogo\n          description\n          buttons {\n            text\n            action\n          }\n        }\n      }\n    }\n    deliveryScheduleCalloutLayout {\n      title\n      titleColor\n      subtitle\n      subtitleColor\n      iconUrl\n      actionUrl\n      buttons {\n        text\n        actionUrl\n        metadata\n        alignment\n      }\n      icon {\n        name\n        color\n        size\n      }\n      tooltip {\n        title\n        description\n        buttons {\n          text\n          action\n        }\n        bulletDescriptions\n        banners {\n          title\n          titleLogo\n          description\n          buttons {\n            text\n            action\n          }\n        }\n      }\n    }\n    pricingDisclosureLayout {\n      title\n      subtitle\n      tooltip {\n        title\n        bulletDescriptions\n      }\n    }\n    address {\n      displayAddress\n      street\n      city\n    }\n  }\n"]);return m=function(){return n},n}function g(){let n=(0,i._)(["\n  fragment StorePopupContentFragment on StorePopupContent {\n    id\n    type\n    title\n    message\n    dismissButtonText\n    acceptButtonText\n    metadataList {\n      key\n      value\n    }\n    bulletCopyList\n    showOnce\n  }\n"]);return g=function(){return n},n}function p(){let n=(0,i._)(["\n  fragment RetailL1CategoryFragment on RetailL1Category {\n    id\n    categoryId\n    urlSlug\n    name\n    storeId\n    imageUrl\n  }\n"]);return p=function(){return n},n}function f(){let n=(0,i._)(["\n  fragment PageInfoFragment on RetailPageInfo {\n    cursor\n    hasNextPage\n  }\n"]);return f=function(){return n},n}function y(){let n=(0,i._)(["\n  fragment MonetaryFieldsFragment on AmountMonetaryFields {\n    currency\n    displayString\n    decimalPlaces\n    unitAmount\n    sign\n    symbol\n  }\n"]);return y=function(){return n},n}function x(){let n=(0,i._)(["\n  fragment NutritionalInfoFragment on NutritionalMetadata {\n    servingSize\n    servingsPerContainer\n    nutritionAnnotation\n    details {\n      header\n      body\n    }\n    nutrients {\n      label\n      total\n      pctDailyValue\n      subCategories {\n        label\n        total\n        pctDailyValue\n      }\n    }\n    disclaimer\n  }\n"]);return x=function(){return n},n}function I(){let n=(0,i._)(["\n  fragment AdsMetadataFragment on AdsMetadata {\n    campaignId\n    adGroupId\n    auctionId\n    complexDealCampaignId\n  }\n"]);return I=function(){return n},n}function h(){let n=(0,i._)(["\n  fragment PriceFragment on RetailPrice {\n    priceType\n    price {\n      ...MonetaryFieldsFragment\n    }\n    additionalDisplayString\n    superscriptedTextGroup {\n      text {\n        text\n        leadingSuperscripts {\n          text\n          scale\n          horizontalOffset\n          verticalOffset\n        }\n        trailingSuperscripts {\n          text\n          scale\n          horizontalOffset\n          verticalOffset\n        }\n      }\n    }\n  }\n  ","\n"]);return h=function(){return n},n}function C(){let n=(0,i._)(["\n  fragment SoldAsInfoTextFragment on RetailSoldAsInfoText {\n    priceType\n    soldAsInfoShortText\n    soldAsInfoLongText\n  }\n"]);return C=function(){return n},n}function b(){let n=(0,i._)(["\n  fragment CategoryInfoFragment on CategoryInfo {\n    name\n    id\n  }\n"]);return b=function(){return n},n}function F(){let n=(0,i._)(["\n  fragment VariantInfoFragment on VariantInfo {\n    minDiscountedPrice {\n      unitAmount\n      currency\n      displayString\n    }\n    minPrice {\n      unitAmount\n      currency\n      displayString\n    }\n    maxPrice {\n      unitAmount\n      currency\n      displayString\n    }\n    pricePresentationType\n    variantTypeInfo {\n      variantType\n      variantSubTypeInfo {\n        itemIds\n      }\n    }\n  }\n"]);return F=function(){return n},n}function S(){let n=(0,i._)(["\n  fragment CloseActionFragment on CloseAction {\n    label\n    uri\n  }\n"]);return S=function(){return n},n}function T(){let n=(0,i._)(["\n  fragment RetailDisclaimerContentFragment on RetailDisclaimerContent {\n    title\n    description\n    closeAction {\n      ...CloseActionFragment\n    }\n  }\n  ","\n"]);return T=function(){return n},n}function P(){let n=(0,i._)(["\n  fragment RetailDisclaimerDataFragment on RetailStoreDisclaimerData {\n    text\n    cms {\n      ...RetailDisclaimerContentFragment\n    }\n  }\n  ","\n"]);return P=function(){return n},n}function R(){let n=(0,i._)(["\n  fragment RetailPromotionTermsAndConditionsFragment on RetailPromotionTermsAndConditions {\n    title\n    action\n    copy\n    disclaimer {\n      ...RetailDisclaimerDataFragment\n    }\n  }\n  ","\n"]);return R=function(){return n},n}function v(){let n=(0,i._)(["\n  fragment RetailItemPromotionDetailsFragment on RetailItemPromotionDetails {\n    promotionTitle\n    termsAndConditions {\n      ...RetailPromotionTermsAndConditionsFragment\n    }\n    promotionDetails\n  }\n  ","\n"]);return v=function(){return n},n}function j(){let n=(0,i._)(["\n  fragment RetailItemRatingFragment on RetailItemRating {\n    averageRating\n    displayNumRatings\n    numOfRatings\n    numOfReviews\n    highRatingThreshold\n  }\n"]);return j=function(){return n},n}function D(){let n=(0,i._)(["\n  fragment RetailItemSwatchFragment on Swatch {\n    name\n    image\n    imageType\n    badges {\n      ...BadgeFragment\n    }\n    tag {\n      name\n      color\n      size\n    }\n  }\n"]);return D=function(){return n},n}function _(){let n=(0,i._)(["\n  fragment BaseRetailItemDetailsFragment on RetailItem {\n    id\n    urlSlug\n    name\n    description\n    storeId\n    menuId\n    imageUrl\n    price {\n      ...MonetaryFieldsFragment\n    }\n    metadata {\n      ...metaDataFragment\n    }\n    variation {\n      variant\n      size\n      swatch {\n        ...RetailItemSwatchFragment\n      }\n      visualVariant {\n        name\n        image\n        type\n      }\n    }\n    shouldHideNutritionalHeaders\n    nutritionalInfo {\n      ...NutritionalInfoFragment\n    }\n    details\n    imageUrlsList\n    soldAsInfoLongText\n    soldAsInfoShortText\n    displayUnit\n    unit\n    purchaseType\n    estimatePricingDescription\n    calloutDisplayString\n    itemMsid\n    ddSic\n    badgeEntries\n    metadataEntries\n    logging\n    badges {\n      ...BadgeFragment\n    }\n    adsMetadata {\n      ...AdsMetadataFragment\n    }\n    priceList {\n      ...PriceFragment\n    }\n    soldAsInfoTextList {\n      ...SoldAsInfoTextFragment\n    }\n    variantInfo {\n      ...VariantInfoFragment\n    }\n    l1Category {\n      ...CategoryInfoFragment\n    }\n    l2Category {\n      ...CategoryInfoFragment\n    }\n    availablePromotion {\n      ...RetailItemPromotionDetailsFragment\n    }\n    quickAddContext {\n      ...QuickAddContextFragment\n    }\n    optionList {\n      ...OptionListFragment\n    }\n    ratings {\n      ...RetailItemRatingFragment\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _=function(){return n},n}function L(){let n=(0,i._)(["\n  fragment RetailItemDetailsFragment on RetailItem {\n    ...BaseRetailItemDetailsFragment\n    productVariants {\n      ...BaseRetailItemDetailsFragment\n    }\n    similarProducts {\n      ...BaseRetailItemDetailsFragment\n    }\n  }\n  ","\n"]);return L=function(){return n},n}function A(){let n=(0,i._)(["\n  fragment RetailCollectionMetadataFragment on RetailCollectionMetadata {\n    description\n    headerIconUrl\n    termsAndConditions {\n      ...RetailPromotionTermsAndConditionsFragment\n    }\n  }\n  ","\n"]);return A=function(){return n},n}function w(){let n=(0,i._)(["\n  fragment RetailCollectionFragment on RetailCollection {\n    id\n    collectionId\n    urlSlug\n    name\n    storeId\n    metadata {\n      ...RetailCollectionMetadataFragment\n    }\n    products {\n      ...RetailItemDetailsFragment\n    }\n    pageInfo {\n      ...PageInfoFragment\n    }\n  }\n  ","\n  ","\n  ","\n"]);return w=function(){return n},n}function M(){let n=(0,i._)(["\n  fragment RetailGeneralizedCollectionFragment on RetailGeneralizedCollection {\n    id\n    collectionId\n    urlSlug\n    name\n    metadata {\n      ...RetailCollectionMetadataFragment\n    }\n    legoSectionBodyList {\n      ...FacetV2Fragment\n    }\n  }\n  ","\n  ","\n"]);return M=function(){return n},n}function O(){let n=(0,i._)(["\n  fragment RetailReOrderCarousel on RetailReOrderCarousel {\n    id\n    name\n    type\n    sortOrder\n    version\n    collection {\n      ...RetailCollectionFragment\n    }\n  }\n  ","\n"]);return O=function(){return n},n}function k(){let n=(0,i._)(["\n  fragment RetailL2CategoryFragment on RetailL2Category {\n    id\n    subCategoryId\n    urlSlug\n    name\n    storeId\n    imageUrl\n  }\n"]);return k=function(){return n},n}function U(){let n=(0,i._)(["\n  fragment RetailFilterFragment on RetailFilter {\n    id\n    name\n    type\n    key\n    iconType\n    selectionType\n    groupId\n  }\n"]);return U=function(){return n},n}function Z(){let n=(0,i._)(["\n  fragment RetailCategoryFeedFragment on RetailCategoryFeed {\n    id\n    categoryId\n    urlSlug\n    name\n    storeId\n    imageUrl\n    storeId\n    totalItemCount\n    l2Categories {\n      ...RetailL2CategoryFragment\n    }\n    selectedL2Category {\n      ...RetailL2CategoryFragment\n    }\n    products {\n      ...RetailItemDetailsFragment\n    }\n    pageInfo {\n      ...PageInfoFragment\n    }\n    sortOptions {\n      name\n      sortBy\n    }\n    groups {\n      id\n      name\n    }\n    legoSectionBodyList {\n      ...FacetV2Fragment\n    }\n    legoRetailItems {\n      ...FacetV2Fragment\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return Z=function(){return n},n}function B(){let n=(0,i._)(["\n  fragment StoreDisclaimersFragment on RetailStoreDisclaimer {\n    id\n    type\n    version\n    sortOrder\n    disclaimerId\n    data {\n      text\n      cms {\n        title\n        description\n        closeAction {\n          label\n          uri\n        }\n      }\n    }\n  }\n"]);return B=function(){return n},n}function N(){let n=(0,i._)(["\n  fragment RetailL1NavigationDataFragment on RetailL1NavigationData {\n    collectionPageRequest {\n      storeId\n      collectionId\n      collectionType\n      showExploreItems\n      attrSrc\n      showCategories\n      page\n      supportsPagination\n    }\n    collectionsRequest {\n      surface\n      orderCartId\n      itemId\n      attrSrc\n      page\n      storeId\n    }\n  }\n"]);return N=function(){return n},n}function z(){let n=(0,i._)(["\n  fragment RetailL1NavCategoryFragment on RetailL1NavCategory {\n    id\n    name\n    urlSlug\n    imageUrl\n    storeId\n    categoryId\n    navigationType\n    navigationData {\n      ...RetailL1NavigationDataFragment\n    }\n  }\n  ","\n"]);return z=function(){return n},n}function V(){let n=(0,i._)(["\n  fragment RetailLegallyRequiredPopups on StorePopupContent {\n    id\n    type\n    title\n    message\n    acceptButtonText\n    dismissButtonText\n    dismissButtonPopup {\n      id\n      type\n      title\n      message\n      acceptButtonText\n      dismissButtonText\n    }\n  }\n"]);return V=function(){return n},n}function E(){let n=(0,i._)(["\n  fragment RetailPillFilterFragment on PillFilter {\n    id\n    name\n    type\n    rangeDirection\n    radioGroupId\n    logging\n    allowedValues {\n      displayName\n      queryValue\n    }\n    icon {\n      name\n      color\n    }\n    backendFilterId\n    swatch {\n      ...RetailItemSwatchFragment\n    }\n  }\n"]);return E=function(){return n},n}(0,r.Ps)(u());let $=(0,r.Ps)(c()),H=(0,r.Ps)(d()),Q=(0,r.Ps)(m()),q=(0,r.Ps)(g()),G=(0,r.Ps)(p()),J=(0,r.Ps)(f()),W=(0,r.Ps)(y()),X=(0,r.Ps)(x()),K=(0,r.Ps)(I()),Y=(0,r.Ps)(h(),W),nn=(0,r.Ps)(C()),ne=(0,r.Ps)(b()),nt=(0,r.Ps)(F()),ni=(0,r.Ps)(S()),nr=(0,r.Ps)(T(),ni),na=(0,r.Ps)(P(),nr),nl=(0,r.Ps)(R(),na),no=(0,r.Ps)(v(),nl),ns=(0,r.Ps)(j()),nu=(0,r.Ps)(D()),nc=(0,r.Ps)(_(),$,W,X,s.G,K,Y,nn,nt,ne,no,l.U9,o.a,ns,nu),nd=(0,r.Ps)(L(),nc),nm=(0,r.Ps)(A(),nl),ng=(0,r.Ps)(w(),nm,nd,J),np=(0,r.Ps)(M(),nm,a.dT),nf=(0,r.Ps)(O(),ng),ny=(0,r.Ps)(k()),nx=(0,r.Ps)(U()),nI=(0,r.Ps)(Z(),ny,nd,J,a.dT),nh=(0,r.Ps)(B()),nC=(0,r.Ps)(N()),nb=(0,r.Ps)(z(),nC),nF=(0,r.Ps)(V()),nS=(0,r.Ps)(E())},253463:function(n,e,t){t.d(e,{SJ:function(){return s}});var i=t(336494),r=t(74800),a=t(128842);function l(){let n=(0,i._)(["\n  query loyaltyProgramDetailsQueryV2($storeId: String!, $consumerId: String!, $pageType: Int) {\n    getLoyaltyProgramAccount(consumerId: $consumerId, storeId: $storeId, pageType: $pageType) {\n      programMembershipData {\n        programId\n      }\n\n      displayModules {\n        ... on LogoCardDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            logoUrl\n          }\n        }\n        ... on HeaderDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            title\n            subtitle\n            headerPhotoUrl\n            bannerText\n            statusText\n          }\n        }\n        ... on FormFieldsDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            consumerDataInputs {\n              title\n              subtitle\n              inputType\n              shouldPrefill\n              prefillValueOverwrite\n              isUneditable\n            }\n          }\n        }\n        ... on ActionsDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            actions {\n              action\n              type\n              callbackPageType\n              callbackWebviewUrl\n            }\n          }\n        }\n        ... on TermsAndConditionsDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            termsText\n          }\n        }\n        ... on BulletedListViewDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            bulletItemList {\n              iconType\n              text\n            }\n          }\n        }\n        ... on CheckboxItemListViewDM {\n          id\n          type\n          version\n          sortOrder\n          data {\n            checkboxItemsList {\n              isRequired\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return l=function(){return n},n}let o=(0,r.Ps)(l()),s=function(n,e,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cache-first";return(0,a.a)(o,{variables:{storeId:n,consumerId:e,pageType:t},fetchPolicy:i,errorPolicy:"all"})}},624601:function(n,e,t){t.d(e,{S:function(){return ni},w:function(){return r}});var i,r,a=t(787536),l=t(512150),o=t(497247),s=t(762592),u=t(228732),c=t(736227),d=t(523328),m=t(95485),g=t(403009),p=t(266506),f=t(539687),y=t(779193),x=t(345802),I=t(927330),h=t(787121),C=t(236643),b=t(382263),F=t(443561),S=t(482480),T=t(39683),P=t(305032),R=t(338772);let v=R.default.div.withConfig({componentId:"sc-e54dc218-0"})(["background-color:",";border-radius:",";padding:"," ",";"],S.Q2.usage.color.background.subdued.default,S.Q2.usage.borderRadius.medium,S.Q2.usage.space.small,S.Q2.usage.space.xSmall),j=R.default.div.withConfig({componentId:"sc-e54dc218-1"})(["padding:"," "," "," ",";"],S.Q2.usage.space.medium,S.Q2.usage.space.medium,S.Q2.usage.space.none,S.Q2.usage.space.medium),D=R.default.div.withConfig({componentId:"sc-e54dc218-2"})(["width:100%;border-bottom:solid thin ",";"],S.Q2.usage.color.border.default),_=n=>{let{omnichannelLoyaltyLinkingView:e,openOCLLinkingView:t}=n,{icon:i,title:r,description:l,button:o}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(v,{children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(C.Z,{size:P.J.medium,type:L(i)}),(0,a.jsxs)(y.Z,{size:f.Uo.small,children:[(0,a.jsx)(c.D,{components:{p:n=>{let{children:e}=n;return(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})}},children:r}),(0,a.jsx)(c.D,{components:{p:n=>{let{children:e}=n;return(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})}},children:l}),(0,a.jsx)(d.Z,{type:m.L$.floating,isInline:!0,leadingIcon:o.enabled?void 0:b.IconType.Check,isDisabled:!o.enabled,onClick:t,children:o.enabled?o.enabledTitle:o.disabledTitle})]})]})})})},L=n=>n.split("/").map(n=>(0,T.kC)(n)).join("");var A=t(359002),w=t(585744),M=t(118700),O=t(432074);let k=R.default.div.withConfig({componentId:"sc-59c3e675-0"})(["display:flex;flex:1;"]),U=R.default.div.withConfig({componentId:"sc-59c3e675-1"})(["width:fit-content;"]),Z=n=>{let{programDetails:e,banner:t,isOpen:i,setIsOpen:r,isMobile:l,showOCLModule:o,openOCLLinkingView:s}=n,{header:T,programExplanation:P,termsAndConditions:R,omnichannelLoyaltyLinkingView:v,footer:j}=e,D=(0,O.y)();return(0,a.jsx)(u.Z,{isOpen:i,renderContentHeader:n=>{let{title:e,subtitle:t}=n;return(0,a.jsx)(p.Z,{size:f.wM.medium,children:(0,a.jsxs)(y.Z,{size:f.Uo.xSmall,children:[(0,a.jsx)(x.x,{textStyle:I.TextStyle.display.medium,children:e}),t&&(0,a.jsx)(x.x,{textStyle:I.TextStyle.title.medium,color:I.d9.text.subdued.default,children:t})]})})},title:T.pageTitle,subtitle:T.merchantName,isFullScreenOnMobile:!0,onClose:()=>r(!1),"data-testid":"store-loyalty-program-details-modal",renderFooterContent:D&&j?()=>(0,a.jsx)(k,{children:(0,a.jsx)(U,{children:(0,a.jsx)(d.Z,{type:m.L$.tertiary,size:g.qE.medium,children:(0,a.jsx)(A.Z,{to:j.ctaAction||w._j.loggedInHome,onClick:()=>{(0,M.j)("w_loyalty_wallet_footer_cta_click",{cta_action:j.ctaAction})},children:(0,a.jsxs)(h.Z,{size:f.O8.xxSmall,children:[(0,a.jsx)(x.x,{weight:I.fs.bold,children:j.ctaTitle}),(0,a.jsx)(C.Z,{type:b.IconType.ArrowRight})]})})})})}):void 0,children:(0,a.jsxs)(a.Fragment,{children:[!l&&(0,a.jsx)(F.Z,{}),(0,a.jsxs)(y.Z,{children:[t&&t,(0,a.jsx)(F.Z,{size:f.$f.xLarge}),(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.strong,children:P.title}),(0,a.jsx)(c.D,{components:{ol:n=>{let{children:e}=n;return(0,a.jsx)("ol",{style:{paddingLeft:S.Q2.usage.space.legacyMedium},children:(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})})},p:n=>{let{children:e}=n;return(0,a.jsx)(F.Z,{children:(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})})}},children:P.explanationText}),o&&(0,a.jsx)(_,{omnichannelLoyaltyLinkingView:v,openOCLLinkingView:s}),(0,a.jsx)(c.D,{components:{a:n=>{let{href:e,children:t}=n;return(0,a.jsx)(d.Z,{size:g.qE.small,isInline:!0,type:m.L$.link,href:e,target:"_blank",children:t})},p:n=>{let{children:e}=n;return(0,a.jsx)(F.Z,{children:(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})})}},children:R.termsText})]})]})})};var B=t(336494),N=t(74800),z=t(804794);function V(){let n=(0,B._)(["\n  mutation optInMPCxToOCL($programId: String!) {\n    optInMPCxToOCL(programId: $programId) {\n      success\n    }\n  }\n"]);return V=function(){return n},n}let E=(0,N.Ps)(V()),$=n=>{let{programId:e,storeId:t}=n;return(0,z.D)(E,{variables:{programId:e},refetchQueries:()=>[{query:s.hM,variables:{storeId:t}}],awaitRefetchQueries:!0})},H=n=>{let{programId:e,storeId:t,modalContent:{title:i,body1:r,body2:o,footer:s,button:g},onClose:h}=n,[C,F]=$({programId:e,storeId:t});return(0,l.useEffect)(()=>{(0,M.j)("omnichannel_loyalty_optin_view",{storeId:t})},[t]),(0,a.jsxs)(u.Z,{isOpen:!0,shouldEnableLegacyConditionalRendering:!0,shouldAnimate:!0,title:i,onClose:h,hasContentPadding:!1,useHairlineDividers:!1,renderContentHeader:n=>{let{title:e}=n;return(0,a.jsx)(j,{children:(0,a.jsx)(x.x,{textStyle:I.TextStyle.display.medium,children:e})})},children:[(0,a.jsx)(p.Z,{size:f.wM.medium,children:(0,a.jsx)(y.Z,{children:(0,a.jsx)(c.D,{components:{a:n=>{let{href:e,children:t}=n;return(0,a.jsx)(d.Z,{padding:m.aV.none,isInline:!0,type:m.L$.plain,href:e,target:"_blank",children:(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:t})})},p:n=>{let{children:e}=n;return(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})}},children:r})})}),(0,a.jsx)(D,{}),(0,a.jsx)(p.Z,{size:f.wM.medium,children:(0,a.jsxs)(y.Z,{children:[!!o&&(0,a.jsx)(y.Z,{size:f.Uo.xSmall,children:(0,a.jsx)(c.D,{components:{a:n=>{let{href:e,children:t}=n;return(0,a.jsx)(d.Z,{padding:m.aV.none,isInline:!0,type:m.L$.plain,href:e,target:"_blank",children:(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:t})})},p:n=>{let{children:e}=n;return(0,a.jsx)(x.x,{textStyle:I.TextStyle.label.medium.default,children:e})}},children:o})}),(0,a.jsx)(c.D,{components:{a:n=>{let{href:e,children:t}=n;return(0,a.jsx)(d.Z,{padding:m.aV.none,isInline:!0,type:m.L$.plain,href:e,target:"_blank",children:(0,a.jsx)(x.x,{size:I.yH.xSmall,textStyle:I.TextStyle.label.xSmall.strong,children:t})})},p:n=>{let{children:e}=n;return(0,a.jsx)(x.x,{size:I.yH.xSmall,textStyle:I.TextStyle.label.xSmall.strong,children:e})}},children:s}),(0,a.jsxs)(y.Z,{size:f.Uo.xSmall,children:[(0,a.jsx)(d.Z,{type:m.L$.primary,leadingIcon:g.enabled?void 0:b.IconType.Check,isDisabled:!g.enabled,state:Q(F),onClick:()=>C({onCompleted:()=>(0,M.j)("omnichannel_loyalty_optin_select",{storeId:t,success:!0}),onError:()=>(0,M.j)("omnichannel_loyalty_optin_select",{storeId:t,success:!1})}),children:g.enabled?g.enabledTitle:g.disabledTitle}),(0,a.jsx)(d.Z,{type:m.L$.plain,onClick:h,children:"Close"})]})]})})]})},Q=n=>{var e;let{data:t,loading:i,error:r}=n;return(null==t?void 0:null===(e=t.optInMPCxToOCL)||void 0===e?void 0:e.success)?m.BN.success:i?m.BN.loading:r?m.BN.error:m.BN.default};var q=t(197359);let G=n=>n.programExperience===q.z.OMNICHANNEL&&J(n),J=n=>Object.entries(n).every(n=>{let[e,t]=n;return W(t)?J(t):K(e,t)}),W=n=>nn(n)&&"object"==typeof n,X=["body1","body2"],K=(n,e)=>Y(n)||nn(e)||ne(e),Y=n=>X.includes(n),nn=n=>!!n,ne=n=>"boolean"==typeof n;var nt=t(938581);(i=r||(r={})).ProgramDetails="programDetails",i.OclOptIn="oclOptIn";let ni=n=>{let{initialView:e="programDetails",storeId:t,...i}=n,[r,u]=(0,l.useState)(e),{data:{programId:c,programExperience:d,header:m,programExplanation:g,termsAndConditions:p,omnichannelLoyaltyLinkingView:f,footer:y}}=(0,s._w)({storeId:t});if((0,l.useEffect)(()=>{m.pageTitle&&g.title&&g.explanationText&&p.termsText||(0,o.eN)({level:"warning",message:"[StoreLoyalty - ProgramDetailsModal] Empty loyalty program details - storeId: ".concat(t,"},\n        pageTitle=").concat(m.pageTitle,",\n        programExplanationTitle=").concat(g.title,",\n        programExplanationText=").concat(g.explanationText,",\n        termsAndConditions=").concat(p.termsText)})},[m.pageTitle,g.explanationText,g.title,t,p.termsText]),!m.pageTitle||!g.title||!g.explanationText||!p.termsText)return null;let x=G({storeId:t,programId:c,programExperience:d,omnichannelLoyaltyLinkingView:f});return"oclOptIn"===r?(0,a.jsx)(nt.M,{children:x&&(0,a.jsx)(H,{programId:c,storeId:t,onClose:()=>u("programDetails"),modalContent:f.modalContent})}):(0,a.jsx)(Z,{...i,openOCLLinkingView:()=>{(0,M.j)("omnichannel_loyalty_info_select",{storeId:t}),u("oclOptIn")},showOCLModule:x,programDetails:{programId:c,header:m,programExplanation:g,termsAndConditions:p,omnichannelLoyaltyLinkingView:f,footer:y}})}},166904:function(n,e,t){t.d(e,{E:function(){return o}});var i=t(787536),r=t(512150),a=t(625446),l=t(624601);let o=n=>{let{storeId:e,bannerData:t,renderModalBanner:o,trackLoyaltyBanner:s,bannerUnifiedTelemetryAnalyticsData:u,setParentModalState:c}=n,[d,m]=r.useState(!1),g=(0,r.useCallback)(()=>{s("click"),m(!0)},[s]);r.useEffect(()=>{c&&c(d)},[d,c]);let p=(0,r.useCallback)(()=>{s("view")},[s]);return e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.E,{...t,onClick:g,onRender:p,bannerUnifiedTelemetryAnalyticsData:u}),(0,i.jsx)(l.S,{storeId:e,isOpen:d,setIsOpen:m,banner:o?o(t):(0,i.jsx)(a.E,{...t})})]}):null}}}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f64d499-34df-5a23-a8c5-54167c6743d8")}catch(e){}}()
//# debugId=7f64d499-34df-5a23-a8c5-54167c6743d8
//# sourceMappingURL=71447-ab5aac6424707b64.js.map
