<script setup>
const intro = "本公司的智能爬楼消毒小车主要用到的材料有PLA+打印件，环氧树脂和铝合金等。小车在结构上主要由底盘、机械臂、电机、喷壶、行星轮系、减速器等部分组成，通过合理的机械设计可以自如地进行两种运动模式的切换：平路前进和爬楼模式，通过结构的连接方式可以调整机械臂的位置按动电梯不同楼层的按钮。小车顶部的喷壶承装含氯消毒剂，同时喷壶可以360度旋转，实现空间全方位消毒。由此可知，在有电梯和无电梯的单元楼，智能爬梯消毒小车均可实现楼道消毒和住户门口的消毒工作。"
</script>

<template>
    <div class="w-full m-4 flex flex-row bg-slate-50 overflow-y-auto no-scrollbar">
        <div class="flex h-full w-1/3 shadow-md">
            <div class="m-4 w-full flex flex-col">
                <img src="/src/assets/car.png" class="h-64" alt="">
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
