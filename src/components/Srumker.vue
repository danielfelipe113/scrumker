<template>
   <!--Nav-->
    <div class="w-full container mx-auto">
      <div class="w-full flex items-center justify-between">
        <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
          Scrum<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">ker</span>
          <span>
            &nbsp;- Scrum Poker App!
          </span>
        </a>
      </div>
    </div>

    <!--Main-->
    <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-start">
      <!--Left Col-->
      <div
        class="flex flex-col w-full justify-center lg:items-start overflow-y-hidden xl:w-3/12"
        
      >
        <JoinSession
          v-if="!isSessionActive"
          @onSessionSubmit="onSessionSubmit"
        />

        <Issues
          v-if="isSessionActive && !!sessionId"
          :sessionId="sessionId"
          :issues="issues"
          @onSelectIssue="onSelectIssue"
          @onCloseSession="onCloseSession"
          @onAddIssue="onAddIssue"
          @onRemoveIssue="onRemoveIssue"
        />
        
      </div>

      <!--Right Col-->
      <div
        class="flex flex-col pb-12 w-full justify-center lg:items-start overflow-y-hidden px-12 xl:w-9/12"
        
      >
        
        <SizeIssue
          :activeIssue="activeIssue"
          v-if="activeIssue.id"
        />
        
      </div>

      <div class="mx-auto md:pt-16">
        <IssuesSized
          v-if="isSessionActive && !!sessionId"
          :issuesSized="issuesSized"
        />
      </div>

      <!--Footer-->
      <div class="w-full pt-16 pb-6 text-sm text-center fade-in">
        <a class="text-gray-200 no-underline hover:no-underline" href="https://www.danielcoy.com">&copy; Daniel Coy</a>
        -
        <a class="text-gray-300 no-underline hover:no-underline" href="https://www.danielcoy.com">
          danielcoy.com
        </a>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import JoinSession from './JoinSession.vue';
  import Issues from './Issues/Issues.vue';
  import IssuesSized from './Issues/IssuesSized.vue';
  import SizeIssue from './Issues/SizeIssue.vue';
  import { Issue } from '../models/Issue';
  export default defineComponent({
    name: 'Skrumker',
    components: {
      JoinSession,
      Issues,
      IssuesSized,
      SizeIssue
    },
    props: {
      
    },
    data() {
      return {
        isSessionActive: false,
        sessionId: '123',
        issuesSized: new Array<Issue>(),
        activeIssue: new Issue(),
        issues: new Array<Issue>(
          // ...[
          //   {
          //     id: 0,
          //     name: 'WEB-000',
          //     url: 'bla',
          //     size: 1,
          //     description: 'lorem dfafds fdsf dsf asdf asdf sdf ds'
          //   },
          //   {
          //     id: 0,
          //     name: 'WEB-002',
          //     url: 'bla',
          //     size: 2,
          //     description: 'lorem dfafds fdsf dsf asdf asdf sdf ds'
          //   },
          //   {
          //     id: 2,
          //     name: 'WEB-002',
          //     url: 'bla',
          //     size: 3,
          //     description: 'lorem dfafds fdsf dsf asdf asdf sdf ds'
          //   },
          //   {
          //     id: 0,
          //     name: 'WEB-000',
          //     url: 'bla',
          //     size: 5,
          //     description: 'lorem dfafds fdsf dsf asdf asdf sdf ds'
          //   },
          //   {
          //     id: 0,
          //     name: 'WEB-000',
          //     url: 'bla',
          //     size: 8,
          //     description: 'lorem dfafds fdsf dsf asdf asdf sdf ds'
          //   },
          //   {
          //     id: 0,
          //     name: 'WEB-000',
          //     url: 'bla',
          //     size: 13,
          //     description: 'lorem dfafds fdsf dsf asdf asdf sdf ds'
          //   },
          // ]
        )
      }
    },
    mounted() {
      // this.issuesSized.push(
      //   this.issues[2]
      // );
    },
    methods: {
      onSessionSubmit(sessionId: string) {
        this.sessionId = sessionId;
        this.isSessionActive = true;
      },
      onIssueSized(issue: Issue) {
        // Add/Update the sized issue from the Sized Issues data
        const sizedIssueIdx = this.issuesSized.findIndex(i => i.id === issue.id);
        if(sizedIssueIdx !== -1) {
          this.issuesSized[sizedIssueIdx] = issue;
        } else {
          this.issuesSized.push(issue);
        }
        // Remove the issue from the Issues data
        this.onRemoveIssue(issue);
      },
      onSelectIssue(issue: Issue) {
        this.issues.forEach(i => {
          i._isActive = false;
        })
        this.activeIssue = issue;
        this.activeIssue._isActive = true;
      },
      onCloseSession() {
        this.activeIssue = new Issue();
        this.sessionId = '';
        this.isSessionActive = false;
        this.issues = [];
        this.issuesSized = [];
      },
      onAddIssue(issue: Issue) {
        const issueIdx = this.issues.findIndex(i => i.id === issue.id);
        if(issueIdx === -1) {
          this.issues.push(issue);
        }
      },
      onRemoveIssue(issue: Issue) {
        const issueIdx = this.issues.findIndex(i => i.id === issue.id);
        if(issueIdx !== -1) {
          this.issues.splice(issueIdx, 1);
        }
      }
    }
  });
</script>
