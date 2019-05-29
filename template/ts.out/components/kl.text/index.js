import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from 'vue-property-decorator';
let KLText = class KLText extends Vue {
    get formatterContent() {
        return (this.content === 0 || this.content) ? this.content : this.emptyText;
    }
    get style() {
        return {
            display: '-webkit-box',
            overflow: 'hidden',
            '-webkit-box-orient': 'vertical',
            'text-overflow': 'ellipsis',
            '-webkit-line-clamp': this.row,
            'line-height': this.lineHeight,
            'overflow-wrap': 'break-word',
        };
    }
};
tslib_1.__decorate([
    Prop()
], KLText.prototype, "content", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], KLText.prototype, "row", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: '-' })
], KLText.prototype, "emptyText", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number], default: 'inherit' })
], KLText.prototype, "lineHeight", void 0);
KLText = tslib_1.__decorate([
    Component({
        name: 'kl-text',
    })
], KLText);
export default KLText;
//# sourceMappingURL=index.js.map