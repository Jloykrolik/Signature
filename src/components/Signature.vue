<template>
  <div class="hello">
    <h1>Create your signature </h1>
    <div class="center settings">
      <div class="custom-block">
        Set your custom color:
        <span class="settings-item">
          <el-color-picker v-model="color" show-alpha @change="onChangeColorPicker" />
        </span>
      </div>
      <div class="custom-block">
        Set your custom line width:
        <span class="settings-item">
          <el-input-number v-model="lineWidth" size="small" :min="min" :step="1" @change="onChangeLineWidth" />
        </span>
      </div>
    </div>
    <div class="center">
      <VueSignaturePad
        width="500px"
        height="500px"
        id="signature"
        :options="options"
        ref="signaturePad"
      />
    </div>
    <div>
      <el-button type="primary" icon="el-icon-refresh-left" @click="undo" />
      <el-button type="success" icon="el-icon-download" @click="download" />
    </div>
  </div>
</template>

<script>
import { Button, Dialog, ColorPicker, InputNumber } from 'element-ui'
export default {
  name: 'SignaturePage',
  components: {
    [Button.name]: Button,
    [Dialog.name]: Dialog,
    [ColorPicker.name]: ColorPicker,
    [InputNumber.name]: InputNumber
  },
  data () {
    return {
      options: {
        penColor: "#000000",
        minWidth: 1
      },
      color: "#000000",
      lineWidth: 1,
      min: 1
    }
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    download () {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()

      if (isEmpty) {
        this.$notify({
          message: 'Nothing to download',
          type: 'warning'
        });
        return
      }

      const time = new Date().getTime()
      const a = document.createElement("a")

      a.href = data
      a.download = `Signature-${time}.png`;
      a.click();

      this.$notify({
        message: 'Downloaded',
        type: 'success'
      })
    },
    onChangeColorPicker(color) {
      this.options = {
        penColor: color
      }
    },
    onChangeLineWidth () {
      this.options = {
        ...this.options,
        minWidth: this.lineWidth - .5,
        maxWidth: this.lineWidth
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.modal-title {
  color: black;
  font-weight: bold;
  font-size: 18px;
}
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-bottom: 10px;
  cursor: url(../assets/drawing-icon.png) 0 12, auto;
}
.custom-block {
  display: flex;
  align-items: center;
}
.custom-block:first-child {
  margin-right: 40px;
}
.center {
  display: flex;
  justify-content: center;
}
.settings {
  margin-bottom: 40px;
}
.settings-item {
  margin-left: 10px;
}
</style>
