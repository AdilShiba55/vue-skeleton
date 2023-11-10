import {defineStore} from "pinia";
import {UtSidebar} from "../util/UtSidebar";
import router from "../router";

export const useAppSidebarStore = defineStore('appSidebar', {
    state: () => ({
        currentFrame: UtSidebar.testFrame1,
        currentFrames: [],
        sidebarOpened: true
    }),
    getters: {
        getFrames(state) {
            return state.currentFrames
        },
        getCurrentFrame(state) {
            return state.currentFrame
        },
        isSidebarOpened(state) {
            return state.sidebarOpened
        },
    },
    actions: {
        changeSidebarVisibility() {
            this.sidebarOpened = !this.sidebarOpened
        },
        setFrame(frame) {
            this.currentFrame = frame
            router.push(frame.path)
        },
        setFrames() {
            this.currentFrames = [UtSidebar.testFrame1, UtSidebar.testFrame2]
        },
        setFrameByCurrentPath() {
            const currentPath = router.currentRoute.value.fullPath
            console.log('currentPath', currentPath)
            this.currentFrames.forEach(frame => {
                if(frame.path === currentPath) {
                    this.currentFrame = frame
                }
            })
        }
    }
})
