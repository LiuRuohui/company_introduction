<script setup>
const intro = "“疫”心守护有限公司，新型创新创业公司，属于公司发展的起步创立阶段，主打产品为新型的智能爬楼消毒小车，实现消毒小车的可移动化和智能化，可适应多种楼道情形对公共空间进行消毒，不需要人为实时看管和操纵，为中国的抗疫持久战做好充足准备。公司以秦皇岛为总部，以核心技术，创新设计实施品牌推动，提供免费试用期限等营销策略占有市场，服务于居民小区、学校、办公楼等场所。"
</script>

<template>
    <div class="w-full m-4 flex flex-row bg-slate-50 overflow-y-auto no-scrollbar">
        <div class="flex h-full w-1/3 shadow-md">
            <div class="m-4 w-full flex flex-col">
                <img src="/src/assets/car.png" class="h-72" alt="">
                <div class="flex flex-grow my-4">
                    <div class="w-full m-8 flex flex-col text-lg font-sans font-bold">
                        <div class="w-full h-24">
                            产品名
                            <div class="w-full text-center mt-4">楼道"B细胞"--智能爬楼消毒小车</div>
                        </div>
                        <div class="w-full h-24">
                            产品简介
                             <div class="w-full text-center mt-4">医疗机构、代理商</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-grow flex-col shadow-md w-2/3">
            <div class="m-4 w-full h-1/4 text-ellipsis">
                <div class="m-8 indent-8 opacity-80 hover:opacity-100 hover:cursor-pointer font-sans text-left break-normal text-xl font-medium">{{intro}}</div>
            </div>
            <div class="m-4 w-full flex flex-grow">
                <div class="m-8">123</div>
            </div>
        </div>
    </div>
</template>
