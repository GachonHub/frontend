<template>
    <transition name="modal" appear>
        <div class="app"    style="max-height:600px; overflow-y: scroll;">
            <div class="form">
                <div class="title">{{title}}</div>
                <form>
                    <div class="form-data">
                        <label for="f-title" class="form-head">학과</label>
                        <input type="text" id="f-title" @input="major = $event.target.value" :value="major" class="form-control form-content"/><br>
                    </div>

                    <div class="form-data">
                        <label for="content" class="form-head">재학 여부</label>
                        <div class="input-group" style="height:35px;">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{graduate}}</button>
                            <ul class="dropdown-menu">
                                <li v-for="item in isGraduateList" :key="item" ><a @click="graduate=item" class="dropdown-item">{{item}}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div v-for="(item, index) in count" :key="item" class="form-data">
                        <div v-if="item==1" class="form-head">sns</div>
                        <div v-else class="form-head"></div>
                        <AddSNS style="height:35px;" :countVal="item" @save="updateSns" :data="snsList[item-1]"></AddSNS>
                        
                        <div type="button" class="minus_btn" @click="minusBtn(index)"><i class="bi bi-dash"></i></div>

                    </div>
                    
                    <div class="form" style="margin:10px;">
                        <button id="btn" type="button" class="form-control" @click="addBox()" style="width: 50%; margin: 0 auto; text-align:center;">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    

                    <div id="title" style="margin-left:auto; width:400px; margin-right:auto;">
                        <div style="display:inline-block;">
                            <div class="modal-repo-title"><b>메인 레포지토리</b></div>
                            <div class="modal-repo-title" style="font-size : 10px;">*메인 레포지토리는 최대 3개까지 선택 가능*</div>
                        </div>
                        <InterlockBtn style="display:inline-block; float:right;" @click="updateUserCommits"></InterlockBtn>
                    </div>
                    <div >
                        <MainRepos id="mainRepos-selection" :repos = info.repos @save="updateMainRepos"></MainRepos>
                    </div>
                    <div class="form-button">
                        <button class="form-control" id="custom-bnt" @click="$emit('close')">취소</button>
                        <button type="button" class="form-control" id="custom-bnt" @click="updateProfile">작성</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
import AddSNS from "../../layout/profile/AddSNS.vue"
import InterlockBtn from "../../layout/InterlockBtn.vue"
import MainRepos from "../../layout/profile/MainRepos.vue"

import {getUserCommits} from "../../../api/ApiGithub.js"

export default {
  name: "post-creation",
  components: {
      AddSNS,
      InterlockBtn,
      MainRepos
  },
  props : {
      title: String,
      info: Object
  },
  data() {
      return {
          count:1,
          isGraduateList : ['재학', '졸업'],
          graduate : "재학",
          snsList : [],
          mainRepos: []
      }
  },
  methods: {
      updateUserCommits() {
          getUserCommits()
          .then(res => {
              return res;
          })
      },
      addBox() {
            const button = document.getElementById("btn");
            this.count+=1;
            console.log(this.count);
            console.log(button);
      },
      minusBtn(idx) {
            document.getElementById('div-'+idx).style.display="none";
            // this.count-=1;
            console.log(this.count);
      
      },
      updateSns(cnt, category, value) {
          if(this.snsList.length < cnt) {
                this.snsList.push({category : category.toUpperCase(), url : value});
          } else {
              this.snsList[cnt] = {category : category.toUpperCase(), url : value};
          }
      },
      updateMainRepos(list) {
          this.mainRepos = list;
      },
      updateProfile() {
          this.$emit('save', this.major, this.graduate, this.snsList, this.mainRepos);
      }
  },
  created() {
      if (this.info != undefined) {
          this.major = this.info.major;
          this.graduate = (this.info.graduate)?'졸업':'재학';
          this.snsList = this.info.sns;
          this.count = this.snsList.length;
      }
  },
  mounted() {

  }
};

</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

#mainRepos-selection {
    background-color:white;
    width: 400px;
    height: 250px;
    margin: auto;
    overflow-y: scroll;
    -ms-overflow-style: none;
    border-radius: 4px;
}

#mainRepos-selection::-webkit-scrollbar {
    display: none;
}

#main-repos {
    width: 50%;
    margin : auto;
}

.form {
    height: 70%;
}

.form-select {
    display: inline-block;
    width: 100px;
    margin-right: 5px;
}

.title {
    height: 60px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
}

.form-data {
    display: grid;
    grid-template-columns: 2.5fr 5fr 2.5fr;
    margin: 10px;
    grid-template-areas: "head content .";
}

textarea {
    resize: none !important;
}

.form-head {
    margin-right: 10px;
    font-size: 14px;
    text-align: right;
    grid-area: "head";
    line-height: 35px;
}

.form-content {
    grid-area: "content";
    font-size: 14px;
}

.form-button {
    height:50px;
    padding-top: 10px;
    width: 400px;
    margin: auto;
    line-height: 50px;
}

#custom-bnt {
    float: right;
    margin-left: 5px;
    display: inline-block;
    width: 80px;
}

.modal-repo-title {
    font-size : 18px; 
    text-align:left;
}

.minus_btn {
    border-radius: 5px;
    border: 1px solid #ced4da;
    color: #ced4da;
    width: 38px;
    line-height: 38px;
    text-align: center;
    z-index: 10;
    margin-left: 10px;
}
</style>
