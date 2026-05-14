const STUDIED_KEY = "pm-studied-chapters";
const THEME_KEY = "pm-theme";
const QUICK_REVISION_KEY = "quick-revision-mode";
const SEARCH_DEBOUNCE_MS = 180;

const CHAPTERS = [
  {
    id: "week3",
    title: "Week 3: The Project Management Process Groups",
    subtitle: "Big-picture project flow from initiation to closing, plus methodology foundations.",
    sections: [
      {
        id: "w3-core",
        title: "Process Groups Core Concepts",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Process</strong> means actions you perform to achieve a specific outcome.</li>
            <li><strong>Project management</strong> is a set of connected process groups used to manage the project from start to end.</li>
            <li>The purpose is to understand the <strong>overall picture</strong> and manage projects systematically, not only cost/resources.</li>
            <li>All projects should pass through the same five process groups even if the project is small.</li>
            <li>Time spent is <strong>not equal</strong> across groups; execution usually consumes the largest effort.</li>
            <li><strong>Execution</strong> usually takes the most time and effort because the actual deliverable is being produced there.</li>
            <li><strong>All five groups matter</strong>; weakness in one group creates risk in the others.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Process Group</th><th>Main Meaning</th><th>Example Output</th></tr></thead>
              <tbody>
                <tr><td>Initiating</td><td>Starting point and authorization</td><td>Project Charter, Stakeholder Register</td></tr>
                <tr><td>Planning</td><td>What, when, who, how</td><td>Scope statement, WBS, schedule, risk list</td></tr>
                <tr><td>Executing</td><td>Turn plans into real work</td><td>Deliverables, team coordination outputs</td></tr>
                <tr><td>Monitoring &amp; Controlling</td><td>Compare actual vs planned and adjust</td><td>Reports, change requests, updates</td></tr>
                <tr><td>Closing</td><td>Formal completion and handover</td><td>Final report, lessons learned, archive</td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Movie-Making Example</th><th>Process Group</th><th>Why It Fits</th></tr></thead>
              <tbody>
                <tr><td>Screenwriting</td><td>Initiating</td><td>The project idea is born and defined.</td></tr>
                <tr><td>Producing</td><td>Planning</td><td>Budget, schedule, cast, and logistics are arranged.</td></tr>
                <tr><td>Acting/Directing</td><td>Executing</td><td>The actual work is performed.</td></tr>
                <tr><td>Editing</td><td>Monitoring &amp; Controlling</td><td>Output is checked and adjusted.</td></tr>
                <tr><td>Releasing</td><td>Closing</td><td>The finished result is formally delivered.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="note">Dr emphasized: all five groups matter, and weak process discipline causes budget overruns and deadline failures (e.g., IRS-style cases).</div>
        `
      },
      {
        id: "w3-lifecycle",
        title: "Process Group vs Project Life Cycle",
        badges: ["EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Process groups</strong>: universal management stages used in every project.</li>
            <li><strong>Life cycle</strong>: detailed technical/phased flow that depends on project type.</li>
            <li>Process groups are managerial structure; life cycle is domain-specific implementation detail.</li>
          </ul>
        `
      },
      {
        id: "w3-knowledge-methods",
        title: "Knowledge Areas & Methodologies",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Knowledge Area</th><th>Practical Purpose</th><th>Peak Activity</th></tr></thead>
              <tbody>
                <tr><td><strong>Integration</strong></td><td>Coordinate all parts into one system</td><td>All phases</td></tr>
                <tr><td><strong>Scope</strong></td><td>Define work boundaries clearly</td><td>Planning</td></tr>
                <tr><td><strong>Schedule</strong></td><td>Establish realistic timeline</td><td>Planning</td></tr>
                <tr><td><strong>Cost</strong></td><td>Budget and track spending</td><td>Planning + Execution</td></tr>
                <tr><td><strong>Quality</strong></td><td>Meet or exceed requirements</td><td>All phases</td></tr>
                <tr><td><strong>Risk</strong></td><td>Identify and mitigate threats</td><td>Planning + Execution</td></tr>
                <tr><td><strong>Stakeholder</strong></td><td>Engage and satisfy key actors</td><td>All phases</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>A <strong>methodology</strong> explains how to do work; a <strong>standard</strong> explains what should be done.</li>
            <li>Methodology selection must fit the project: Agile, Six Sigma, PRINCE2, RUP, etc.</li>
            <li>Agile benefits: faster delivery, better change handling, improved quality/productivity.</li>
            <li>Agile challenges: culture shift, resistance, weak coaching, shortage of qualified people.</li>
          </ul>
        `
      },
      {
        id: "w3-stakeholder-initiation",
        title: "Stakeholder Register, Kick-Off, and Key Outputs",
        badges: ["DR EMPHASIZED", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Stakeholder register</strong> includes interest, influence, expectations, communication needs, and stop-power stakeholders.</li>
            <li>PM identifies charter, creates stakeholder register, and stakeholder strategy.</li>
            <li><strong>Kick-off meeting</strong> before work starts: stakeholders meet, align goals, and discuss future plan.</li>
            <li>Planning output examples: team contract, scope statement, WBS, Gantt schedule with dependencies/resources, prioritized risk list.</li>
            <li>Execution requires leadership to solve problems, coordinate work, and face challenges.</li>
            <li>Monitoring includes milestone reports with planned date, status, owner, issues/comments.</li>
            <li>Closing outputs: final files, lessons learned, organizational process assets, final presentation to sponsor.</li>
          </ul>
        `
      }
    ],
    exam: [
      {
        q: "Define project management process groups and explain why they are important.",
        a: "Project management process groups are the five high-level managerial stages used to guide a project from authorization to closure: initiating, planning, executing, monitoring and controlling, and closing. They are important because they provide structure, accountability, and visibility across the full project journey. Through these groups, the project manager can align stakeholders, define scope and schedule, execute work, monitor variance, and formally complete deliverables. For example, projects that neglect planning and monitoring often face budget overruns and missed deadlines. Therefore, process groups are essential for controlling complexity and improving project success outcomes."
      },
      {
        q: "Compare process groups and project life cycle.",
        a: "Process groups represent universal management functions that apply to nearly all projects, regardless of industry. By contrast, the project life cycle defines the detailed technical phases specific to a given project type. For instance, a software project and a construction project both use the five process groups, but each has a different life cycle sequence and deliverable logic. This distinction matters because managers must always apply process discipline while tailoring life cycle details to context. In conclusion, process groups provide consistency, while life cycle provides specificity."
      },
      {
        q: "Essay: Explain key outputs of initiating, planning, executing, monitoring, and closing.",
        a: "Initiating typically outputs the project charter and stakeholder register, which authorize work and identify key actors. Planning produces baseline artifacts such as scope statement, WBS, schedule, and prioritized risks to guide implementation. Executing generates deliverables while the project manager leads teams and resolves operational challenges. Monitoring and controlling produce status reports, change requests, and approved updates after comparing actual progress against plan. Closing outputs include final handover files, lessons learned, and organizational process asset updates. Together, these outputs ensure transparent governance, controlled execution, and institutional learning, which are all critical for long-term project capability."
      }
    ]
  },
  {
    id: "week4",
    title: "Week 4: Project Integration Management",
    subtitle: "Coordinating all knowledge areas and controlling change across the project.",
    sections: [
      {
        id: "w4-seven",
        title: "Seven Integration Management Processes",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ol>
            <li>Develop Project Charter</li>
            <li>Develop Project Management Plan</li>
            <li>Direct and Manage Project Work</li>
            <li>Manage Project Knowledge</li>
            <li>Monitor and Control Project Work</li>
            <li>Perform Integrated Change Control</li>
            <li>Close Project or Phase</li>
          </ol>
          <div class="note">Integration management synchronizes all other knowledge areas through the life cycle.</div>
        `
      },
      {
        id: "w4-strategy-selection",
        title: "Strategic Planning, SWOT, and Project Selection",
        badges: ["EXAM QUESTION"],
        html: `
          <ul>
            <li>Strategic planning sets long-term objectives and predicts future product/service needs.</li>
            <li>SWOT is used to prioritize, cancel, or select realistic projects.</li>
            <li>Selection methods: organizational needs, project categorization, financial analysis, weighted scoring, balanced scorecard.</li>
            <li>Typical sequence: identify potential projects -> evaluate realism/importance -> create charter.</li>
            <li><strong>Balanced scorecard</strong> looks at customer need, financial outcome, organizational efficiency, and organizational growth.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Financial Method</th><th>Meaning</th><th>Decision Rule</th></tr></thead>
              <tbody>
                <tr><td>NPV</td><td>Present value of future cash flows</td><td>Higher NPV preferred</td></tr>
                <tr><td>ROI</td><td>Return relative to investment</td><td>Higher ROI preferred, must exceed minimum rate</td></tr>
                <tr><td>Payback</td><td>Time to recover investment</td><td>Shorter payback preferred</td></tr>
              </tbody>
            </table>
          </div>
          <div class="formula-box">ROI = (Total Discounted Benefits - Total Discounted Costs) / Discounted Costs</div>
        `
      },
      {
        id: "w4-charter-plan",
        title: "Project Charter vs Project Management Plan",
        badges: ["DR EMPHASIZED", "EXAM QUESTION"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Item</th><th>Project Charter</th><th>Project Management Plan</th></tr></thead>
              <tbody>
                <tr><td>Owner</td><td>Sponsor/owner</td><td>Project manager</td></tr>
                <tr><td>Purpose</td><td>Authorize project + PM authority</td><td>Coordinate planning and guide execution/control</td></tr>
                <tr><td>Inputs/Elements</td><td>Statement of Work (SOW), business case, agreements, Enterprise Environmental Factors (EEF), Organizational Process Assets (OPA)</td><td>Overview, organization, management/technical processes, work/schedule/budget</td></tr>
                <tr><td>Approval</td><td>Stakeholders sign</td><td>Approved baseline for management</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>Charter can be updated, but edits should be documented transparently.</li>
            <li><strong>Charter inputs:</strong> Statement of Work (SOW), business case, agreements, Enterprise Environmental Factors (EEF), and Organizational Process Assets (OPA).</li>
          </ul>
        `
      },
      {
        id: "w4-execution-control",
        title: "Execution, Baseline, and Integrated Change Control",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Execution uses meetings, Project Management Information System (PMIS), and expert judgment; most project time/cost is spent here.</li>
            <li><strong>Application area</strong> affects execution because the actual product is produced during execution.</li>
            <li>The project manager should <strong>lead by example</strong> in discipline, communication, and change handling.</li>
            <li><strong>Baseline</strong> = approved project management plan + approved changes.</li>
            <li>Integrated change control objectives:
              <ul>
                <li>Influence beneficial changes</li>
                <li>Determine that change occurred</li>
                <li>Manage actual changes systematically</li>
              </ul>
            </li>
            <li>Change control system documents who can change what and how.</li>
            <li>Change control board (CCB) reviews and approves/rejects change requests.</li>
            <li class="less-emphasized">Configuration management: maintains version-controlled product descriptions so approved specifications stay accurate throughout the project.</li>
            <li>Closing requires finalizing activities, transitioning the final product or service, and updating Organizational Process Assets (OPA).</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Integrated change control = impact analysis → CCB approval → baseline update. Unapproved changes lead to scope creep and cost overruns.</div>
        `
      }
    ],
    exam: [
      {
        q: "Define project integration management and list its main processes.",
        a: "Project integration management is the knowledge area responsible for coordinating all project components and knowledge areas so they function as one coherent system. Its main processes include developing the charter, developing the management plan, directing and managing work, managing knowledge, monitoring and controlling work, performing integrated change control, and closing the project or phase. This coordination is essential because projects involve interdependent scope, time, cost, quality, and stakeholder dimensions. Without integration, decisions in one area can damage performance in another. Therefore, integration management is the central mechanism that keeps project objectives aligned and achievable."
      },
      {
        q: "Compare project charter and project management plan.",
        a: "The project charter is an authorization document typically issued by the sponsor. It formally starts the project and grants the project manager authority to use resources. The project management plan, however, is developed by the project manager and integrates all planning components required to execute, monitor, and control project work. While the charter confirms strategic intent and legitimacy, the management plan provides operational direction and performance baseline. Both are necessary: one enables the project to exist, and the other enables it to succeed."
      },
      {
        q: "Essay: Explain integrated change control and why it matters.",
        a: "Integrated change control is the formal process used to evaluate, approve, reject, and track project changes in a coordinated manner. It ensures changes are understood in terms of scope, schedule, cost, quality, and stakeholder impact before implementation. The process relies on change requests, a documented change control system, and often a change control board that includes key stakeholders. For example, when a sponsor requests scope expansion, the project team should analyze impact against the baseline and present decision options before approval. This protects project integrity and prevents uncontrolled changes from causing delays or overruns. In conclusion, integrated change control is fundamental for governance, traceability, and project stability."
      }
    ]
  },
  {
    id: "week56",
    title: "Week 5/6: Project Scope Management",
    subtitle: "Defining, validating, and controlling project work boundaries.",
    sections: [
      {
        id: "w56-scope-core",
        title: "Scope Management Fundamentals",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Project scope management</strong>: ensure the project includes all required work and only required work.</li>
            <li>Scope is about <strong>amount of work</strong>, not project size.</li>
            <li>Clear scope drives quality and control; unclear scope drives rework and conflict.</li>
            <li>Project manager must prevent extra non-approved work (<strong>gold plating</strong>).</li>
            <li>Work Breakdown Structure (WBS) is central to planning and scope decomposition into manageable components.</li>
          </ul>
        `
      },
      {
        id: "w56-processes",
        title: "Five Scope Processes",
        badges: ["EXAM QUESTION", "DR EMPHASIZED"],
        html: `
          <ol>
            <li><strong>Collect Requirements</strong>: interviews, workshops, questionnaires/surveys.</li>
            <li><strong>Define Scope</strong>: prepare scope statement and obtain approval.</li>
            <li><strong>Create WBS</strong>: break scope into smaller controlled work packages.</li>
            <li><strong>Verify Scope</strong>: validate deliverables with stakeholders.</li>
            <li><strong>Control Scope</strong>: evaluate and manage requested changes using variance analysis and disciplined approval.</li>
          </ol>
          <div class="note">Dr emphasized: WBS and scope creep control are frequent exam focus points.</div>
        `
      },
      {
        id: "w56-product-project",
        title: "Product Scope vs Project Scope",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Aspect</th><th>Product Scope</th><th>Project Scope</th></tr></thead>
              <tbody>
                <tr><td>Main question</td><td>What should the deliverable be?</td><td>What work must be done?</td></tr>
                <tr><td>Focus</td><td>Features and functions</td><td>Tasks, packages, deliverables, and control</td></tr>
                <tr><td>Example</td><td>A system must support reporting</td><td>The team must design, build, test, and deploy reporting</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Strategic scope definition</strong> is easier than operational control during day-to-day execution.</li>
            <li><strong>Scope is linked to quality</strong> because unclear boundaries often create rework and defects.</li>
            <li><strong>Saying no</strong> to extra unapproved work is part of proper scope control.</li>
          </ul>
        `
      },
      {
        id: "w56-verify-vs-control",
        title: "Verify Scope vs Control Scope: A Critical Process Distinction",
        badges: ["HIGH PRIORITY", "EXAM QUESTION", "DR EMPHASIZED"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Dimension</th><th>Verify Scope (Validate)</th><th>Control Scope</th></tr></thead>
              <tbody>
                <tr><td><strong>Purpose</strong></td><td>Confirm work deliverables meet requirements and are acceptable</td><td>Ensure project scope doesn't expand without approval</td></tr>
                <tr><td><strong>Timing</strong></td><td>During and after production of deliverables</td><td>Throughout entire project</td></tr>
                <tr><td><strong>Question Answered</strong></td><td>Is the deliverable correct?</td><td>Is the scope growing uncontrolled?</td></tr>
                <tr><td><strong>Method</strong></td><td>Inspection, testing, stakeholder review, acceptance testing, sign-off</td><td>Variance analysis, traceability review, change management, scope creep detection</td></tr>
                <tr><td><strong>Output</strong></td><td>Accepted deliverables or rework requests; quality verification</td><td>Approved/rejected scope changes; baseline updates; trend reports</td></tr>
                <tr><td><strong>Stakeholders</strong></td><td>Primarily customer/sponsor who accepts deliverables</td><td>PM, sponsor, change control board (CCB)</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Verify Scope = Acceptance.</strong> Stakeholder formally reviews work and says "yes, this meets our requirements" or "no, rework needed."</li>
            <li><strong>Control Scope = Protection.</strong> PM ensures that no unapproved work is added, and all changes go through formal CCB approval before baseline update.</li>
            <li><strong>Sequence:</strong> First you control scope (manage changes), then you verify scope (get acceptance).</li>
            <li><strong>Common mistake:</strong> Confusing the two. Scope control is about preventing unauthorized expansion; scope verification is about confirming what was built is what was asked for.</li>
          </ul>
          <div class="note"><strong>Example:</strong> Stakeholder requests "add a new report." That's scope creep (control scope issue). PM conducts impact analysis, submits to CCB, gets approval, updates baseline. Later, the team builds the report. PM then verifies it matches the requirement (verify scope). Without control, the report might never be captured in the plan.</div>
        `
      },
      {
        id: "w56-definition-elements",
        title: "Scope Definition Elements and Change Example",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Product description</strong>: what it is</li>
            <li><strong>Deliverables</strong>: what is produced</li>
            <li><strong>Acceptance criteria</strong>: acceptance condition</li>
            <li><strong>Exclusions</strong>: not included work</li>
            <li><strong>Constraints</strong>: limitations</li>
            <li><strong>Assumptions</strong>: believed-to-be-true conditions</li>
          </ul>
          <div class="note">Scope change example: building from 3 floors to 5 floors is a major change requiring impact analysis and approval.</div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Change Area</th><th>Impact of 3 -> 5 Floors</th></tr></thead>
              <tbody>
                <tr><td>Cost</td><td>Higher materials, labor, supervision, overhead</td></tr>
                <tr><td>Time</td><td>Extended schedule and potential milestone shifts</td></tr>
                <tr><td>Quality</td><td>Higher control needs, increased defect risk if rushed</td></tr>
                <tr><td>Resources</td><td>Additional teams/equipment/procurement burden</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "w56-scope-baseline",
        title: "Scope Baseline: The Foundation of Scope Control",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Scope Baseline</strong> = approved Scope Statement + WBS + WBS Dictionary (detailed descriptions of each work package).</li>
            <li>The scope baseline is the REFERENCE POINT for all future scope change management.</li>
            <li>Once approved, any change to scope baseline must go through formal Change Control Board (CCB) process.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Component</th><th>Contains</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td><strong>Scope Statement (approved)</strong></td><td>Product description, deliverables, acceptance criteria, exclusions, constraints, assumptions</td><td>Sets boundaries: what IS and IS NOT included</td></tr>
                <tr><td><strong>Work Breakdown Structure (WBS)</strong></td><td>Hierarchical decomposition of scope into work packages</td><td>Ensures all scope is captured; allows resource and cost assignment</td></tr>
                <tr><td><strong>WBS Dictionary</strong></td><td>Detailed description of each work package: tasks, schedules, resource needs, quality standards</td><td>Operational guide for execution teams; clarity for control</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Why baseline matters:</strong> Without it, scope disputes arise, creep goes undetected, and cost/schedule impacts aren't properly managed.</li>
            <li><strong>Change management process:</strong> If stakeholder requests scope change, PM analyzes impact on baseline, seeks CCB approval, then updates baseline and plans.</li>
            <li><strong>Scope control:</strong> Monitor actual work against baseline. Variance analysis compares work performed vs work planned at baseline.</li>
            <li><strong>Baseline updates:</strong> Only happen through formal change control; prevents casual scope expansion.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Scope Baseline = Scope Statement + WBS + WBS Dictionary. It's the control reference for the entire project.</div>
        `
      }
    ],
    exam: [
      {
        q: "Define project scope management and explain its importance.",
        a: "Project scope management refers to the processes required to ensure that a project includes all the work required, and only the work required, to complete it successfully. It is important because unclear scope leads to scope creep, schedule delays, cost escalation, and quality degradation. Through requirement collection, scope definition, WBS creation, scope verification, and scope control, the project manager creates a clear boundary for execution. For example, expanding a building from three floors to five floors without formal control can destabilize resources and deadlines. Therefore, scope management is essential for disciplined delivery and stakeholder alignment."
      },
      {
        q: "Compare product scope and project scope.",
        a: "Product scope describes the features and functions of the final deliverable. Project scope describes the work required to produce that deliverable. In practice, product scope answers what the product must be, while project scope answers what the team must do. If product scope changes, project scope usually changes as well. Distinguishing both helps project managers estimate work accurately and avoid uncontrolled expansion."
      },
      {
        q: "Essay: Explain scope creep and how to control it.",
        a: "Scope creep is the uncontrolled expansion of project scope without corresponding adjustments to time, cost, and resources. It often begins with small requests that seem harmless but accumulate into major delivery risk. Effective control starts with a clear scope statement, approved WBS, and formal change management procedures. The project manager should analyze each requested change using impact analysis and submit it for proper authority review before implementation. For example, changing a construction project from three to five floors requires baseline updates, budget revision, and schedule re-planning. In conclusion, controlling scope creep protects project feasibility and success."
      }
    ]
  },
  {
    id: "week7",
    title: "Week 7: Project Schedule Management",
    subtitle: "Time planning, dependencies, critical path, and schedule optimization.",
    sections: [
      {
        id: "w7-processes",
        title: "Schedule Management Processes",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ol>
            <li>Plan schedule management</li>
            <li>Define activities (using WBS)</li>
            <li>Sequence activities</li>
            <li>Estimate activity durations</li>
            <li>Develop schedule</li>
            <li>Control schedule</li>
          </ol>
          <ul>
            <li>Time is inflexible; deadline misses are common in projects.</li>
            <li>Resource availability and cultural work patterns can create schedule conflicts.</li>
          </ul>
        `
      },
      {
        id: "w7-activities-dependencies",
        title: "Activity Attributes and Dependencies",
        badges: ["EXAM QUESTION"],
        html: `
          <ul>
            <li>Attributes include predecessors, successors, logical relationships, leads/lags, constraints, imposed dates, assumptions, and resource requirements.</li>
            <li>Dependency types: mandatory, discretionary, external.</li>
            <li><strong>PDM</strong> (Precedence Diagramming Method) is the common modern method using FS, SS, FF, and SF.</li>
            <li><strong>ADM</strong> (Arrow Diagramming Method) is an older activity-on-arrow method with more limited relationship flexibility.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Relationship</th><th>Meaning</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>FS</td><td>Finish to Start</td><td>Finish coding before testing starts</td></tr>
                <tr><td>SS</td><td>Start to Start</td><td>Start site supervision with construction start</td></tr>
                <tr><td>FF</td><td>Finish to Finish</td><td>Testing and coding finish together</td></tr>
                <tr><td>SF</td><td>Start to Finish</td><td>New system starts before old one stops</td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>Effort</td><td>Total amount of work</td><td>20 person-hours</td></tr>
                <tr><td>Duration</td><td>Calendar time needed</td><td>4 working days</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "w7-gantt-cpm-pert",
        title: "Gantt, Milestones, CPM, and PERT",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED", "FORMULA"],
        html: `
          <ul>
            <li>Gantt chart displays tasks and dates; symbols include milestones (black diamond), summary bars, dependencies (arrows).</li>
            <li>Milestones should follow <strong>SMART</strong>: specific, measurable, assignable, realistic, time-framed.</li>
            <li><strong>Critical Path Method (CPM)</strong> highlights critical activities and float using network logic.</li>
            <li><strong>Program Evaluation and Review Technique (PERT)</strong> uses three duration estimates (optimistic, most likely, pessimistic) for realistic planning under uncertainty.</li>
            <li>Forward pass computes early start/finish; backward pass computes late start/finish.</li>
            <li>Float/slack: free float and total float represent allowable delay without target damage.</li>
          </ul>
          <div class="note">Dr emphasized: CPM vs PERT and float/slack interpretation are core exam themes.</div>
        `
      },
      {
        id: "w7-forward-pass",
        title: "Forward Pass Example and CPM Mini Network",
        badges: ["HIGH PRIORITY", "FORMULA", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Example:</strong> A = 5 days, B = 10 days, C = 7 days, and C depends on both A and B.</li>
            <li>ES of C = 10 because the longest predecessor path ends at day 10.</li>
            <li>EF of C = 17 because EF = ES + duration = 10 + 7.</li>
            <li>A has 5 days float, while B and C have zero float.</li>
            <li class="less-emphasized"><strong>Murphy's Law:</strong> if something can go wrong, it may go wrong — plan realistic contingency time.</li>
            <li class="less-emphasized"><strong>Parkinson's Law:</strong> work expands to fill available time — use focused deadlines and active progress monitoring.</li>
            <li>Software cannot know dependencies unless the PM enters correct relationships.</li>
          </ul>
          <div class="diagram-card">
            <h4>CPM Mini Network Example</h4>
            <svg viewBox="0 0 640 170" class="svg-diagram" role="img" aria-label="Mini CPM network example showing A to C and B to C">
              <defs>
                <marker id="arrow-head" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"></polygon>
                </marker>
              </defs>
              <rect x="40" y="55" width="130" height="58" rx="12" class="diagram-node"></rect>
              <text x="105" y="80" text-anchor="middle" class="diagram-label">A = 5 days</text>
              <text x="105" y="98" text-anchor="middle" class="diagram-sub">Float = 5</text>
              <rect x="220" y="18" width="130" height="58" rx="12" class="diagram-node"></rect>
              <text x="285" y="43" text-anchor="middle" class="diagram-label">B = 10 days</text>
              <text x="285" y="61" text-anchor="middle" class="diagram-sub">Float = 0</text>
              <rect x="460" y="55" width="145" height="58" rx="12" class="diagram-node diagram-node--accent"></rect>
              <text x="532" y="80" text-anchor="middle" class="diagram-label">C = 7 days</text>
              <text x="532" y="98" text-anchor="middle" class="diagram-sub">ES = 10, EF = 17</text>
              <line x1="170" y1="84" x2="460" y2="84" stroke="currentColor" stroke-width="3" marker-end="url(#arrow-head)"></line>
              <line x1="350" y1="47" x2="460" y2="70" stroke="currentColor" stroke-width="3" marker-end="url(#arrow-head)"></line>
            </svg>
          </div>
        `
      },
      {
        id: "w7-float-formulas",
        title: "Float Formulas and Critical Path Calculation",
        badges: ["HIGH PRIORITY", "FORMULA", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Float (or Slack)</strong> = amount of time an activity can be delayed without delaying the overall project completion.</li>
            <li>Float is calculated from forward pass (ES, EF) and backward pass (LS, LF) values.</li>
          </ul>
          <div class="formula-box">Total Float (TF) = Late Start (LS) - Early Start (ES)</div>
          <div class="formula-box">OR: Total Float (TF) = Late Finish (LF) - Early Finish (EF)</div>
          <ul>
            <li><strong>Interpretation:</strong></li>
            <li>If TF > 0 = activity has schedule margin; can slip TF days without impacting project deadline.</li>
            <li>If TF = 0 = activity is on critical path; zero margin; any delay impacts project.</li>
            <li>If TF < 0 = schedule is impossible with current logic (should not occur in valid schedule).</li>
            <li><strong>Free Float</strong> = float within a single path; amount activity can slip without impacting successor.</li>
            <li><strong>Total Float</strong> = float across entire project; amount activity can slip without impacting project finish.</li>
            <li>Project managers focus on activities with zero or near-zero float; these are most critical.</li>
          </ul>
          <div class="note"><strong>Example:</strong> Activity A has ES=5, LS=8, so TF=3 days. Activity A can start anytime between day 5 and day 8 without affecting the project end date. But if it starts on day 9, the project will be late.</div>
        `
      },
      {
        id: "w7-critical-path-definition",
        title: "Critical Path Definition and Implications",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Critical Path</strong> = longest sequence of dependent activities from project start to finish.</li>
            <li>The critical path determines the minimum possible project duration (earliest finish date).</li>
            <li><strong>Key characteristic:</strong> All activities on the critical path have ZERO FLOAT.</li>
            <li><strong>Why it matters:</strong> Any delay in a critical path activity automatically delays the entire project. Non-critical activities have buffer (float) so minor delays don't impact the project end date.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Attribute</th><th>Critical Path Activities</th><th>Non-Critical (Float) Activities</th></tr></thead>
              <tbody>
                <tr><td>Float value</td><td>Zero (0)</td><td>Greater than zero (> 0)</td></tr>
                <tr><td>Schedule margin</td><td>None; fully committed</td><td>Yes; can slip within float limits</td></tr>
                <tr><td>Delay impact</td><td>Any delay delays project finish</td><td>Small delays absorbed by float</td></tr>
                <tr><td>PM attention</td><td>HIGH; monitor closely, protect from risks</td><td>MEDIUM; monitor but less urgent</td></tr>
                <tr><td>Resource allocation</td><td>Critical; often best resources assigned</td><td>Flexible; can be reassigned if needed</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Project management implication:</strong> PM should focus monitoring and control effort on the critical path first. Protecting critical-path activities from delays protects the project deadline.</li>
            <li><strong>Schedule optimization:</strong> To accelerate project, target activities on the critical path for crashing or fast-tracking. Improving non-critical activities doesn't help unless it makes them critical.</li>
            <li><strong>Risk management:</strong> High-risk activities on the critical path require extra mitigation planning; delays are felt immediately.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Critical path = longest path = zero float = determines project duration = focus of PM control.</div>
        `
      },
      {
        id: "w7-backward-pass",
        title: "Backward Pass Example and Late Start/Finish Calculation",
        badges: ["HIGH PRIORITY", "FORMULA", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Backward Pass</strong> = working backward from project finish date to calculate Late Start (LS) and Late Finish (LF) for each activity.</li>
            <li>Backward pass determines the latest an activity can start/finish without delaying the project end date.</li>
            <li>Combining forward pass (ES, EF) with backward pass (LS, LF) reveals float (schedule margin) for each activity.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Calculation Step</th><th>Formula</th><th>Direction</th></tr></thead>
              <tbody>
                <tr><td><strong>Forward Pass</strong></td><td>EF = ES + Duration; Next Activity ES = Current EF</td><td>Left to right (project start → finish)</td></tr>
                <tr><td><strong>Backward Pass</strong></td><td>LS = LF - Duration; Previous Activity LF = Current LS</td><td>Right to left (project finish → start)</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Example using CPM mini network:</strong></li>
            <li>Forward Pass: A (5 days) ES=0, EF=5. B (10 days) ES=0, EF=10. C (7 days) ES=10, EF=17. Project duration = 17 days.</li>
            <li>Backward Pass: C must finish by day 17 (LF=17). C LS = 17 - 7 = 10. B must finish by day 10 (LF=10 to feed C). B LS = 10 - 10 = 0. A must finish by day 5 (LF=5 to feed C). A LS = 5 - 5 = 0.</li>
            <li>Float: A TF = LS - ES = 5 - 0 = 5 (float available). B TF = 10 - 0 = 10 (also float). C TF = 10 - 10 = 0 (critical path, no float).</li>
            <li><strong>Why backward pass matters:</strong> It shows the latest each activity can start without impacting the project. Activities with zero float are critical and must be protected.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Forward pass = when earliest can something happen (ES, EF). Backward pass = when latest can something happen (LS, LF). Float shows the difference.</div>
        `
      },
      {
        id: "w7-leads-lags",
        title: "Activity Relationships: Leads, Lags, and Dependency Types",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Dependency</strong> = logical relationship between two activities that restricts sequencing.</li>
            <li>Four types of dependencies: Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF).</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Relationship</th><th>Meaning</th><th>Lag/Lead</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td><strong>Finish-to-Start (FS)</strong></td><td>Predecessor must finish before successor starts</td><td>Lag = delay before starting successor</td><td>Paint wall (finish) → let paint dry 1 day (lag) → hang pictures (start)</td></tr>
                <tr><td><strong>Start-to-Start (SS)</strong></td><td>Predecessor must start before successor can start</td><td>Lead = start successor BEFORE predecessor finishes</td><td>Start building foundation → start framing 5 days later with lead overlap</td></tr>
                <tr><td><strong>Finish-to-Finish (FF)</strong></td><td>Predecessor must finish before successor finishes</td><td>Lag = hold successor finish to allow predecessor to complete</td><td>Testing (predecessor) → packaging (successor) can't finish until testing done</td></tr>
                <tr><td><strong>Start-to-Finish (SF)</strong></td><td>Predecessor must start before successor can finish (rare)</td><td>Lead/Lag timing</td><td>Uncommon; used in specialized scheduling</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Lead</strong> = overlap; start successor BEFORE predecessor finishes. Reduces project duration. Example: Start painting 2 days before drywall is completely done (if safe).</li>
            <li><strong>Lag</strong> = wait time; delay before starting successor. Adds time. Example: Wait 3 days after concrete pour before framing (curing time required).</li>
            <li><strong>Critical distinction:</strong> Leads compress schedule (fast-tracking), lags extend schedule (required waiting).</li>
            <li><strong>PM use:</strong> Identify opportunities for leads to reduce project duration. Understand lags to plan realistic schedules.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Lead = fast-track potential (overlap); Lag = waiting/buffer time (extension). Don't confuse them.</div>
        `
      },
      {
        id: "w7-shorten-control",
        title: "Crashing, Fast Tracking, Buffers, and Control",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Crashing</strong>: add resources to critical activities for duration reduction at lowest cost.</li>
            <li><strong>Fast tracking</strong>: overlap activities that were sequential.</li>
            <li>Critical chain approach accounts for limited resources and introduces buffers.</li>
            <li>Buffer types: project buffer and feeding buffers.</li>
            <li>Theory of Constraints focuses on the main bottleneck and reducing harmful multitasking.</li>
            <li>Control schedule means tracking current state, detecting delays, and applying approved changes.</li>
            <li>Traditional schedule control focuses deadline completion; Agile emphasizes continuous delivery flexibility.</li>
          </ul>
        `
      },
      {
        id: "w7-burndown-gantt",
        title: "Burndown Chart vs Gantt Chart: Schedule View Comparison",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Aspect</th><th>Burndown Chart</th><th>Gantt Chart</th></tr></thead>
              <tbody>
                <tr><td><strong>Primary View</strong></td><td>Remaining work over time</td><td>Tasks on timeline with dates</td></tr>
                <tr><td><strong>Progress Visibility</strong></td><td>Very direct progress signal</td><td>Good planning/dependency view</td></tr>
                <tr><td><strong>Common Use</strong></td><td>Agile sprint/project tracking</td><td>Traditional schedule planning/control</td></tr>
                <tr><td><strong>Timeline Focus</strong></td><td>Short cycles (sprint-based)</td><td>Long projects or major phases</td></tr>
                <tr><td><strong>Dependencies Shown</strong></td><td>Implicit in burn pattern</td><td>Explicit arrows between tasks</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>Burndown works best for teams delivering in short iterations.</li>
            <li>Gantt works best for projects with clear sequential logic and fixed endpoints.</li>
            <li>Many teams use both: Gantt for overall roadmap, burndown for sprint execution.</li>
          </ul>
        `
      }
    ],
    exam: [
      {
        q: "Define project schedule management and list its processes.",
        a: "Project schedule management is the set of processes used to ensure timely completion of a project. It includes planning schedule management, defining activities, sequencing activities, estimating durations, developing the schedule, and controlling the schedule. These processes transform scope into a time-based execution model. Since time is fixed and delays are costly, schedule discipline is a major success factor. Thus, schedule management provides both planning clarity and control capability."
      },
      {
        q: "Compare CPM and PERT.",
        a: "CPM typically uses deterministic single-duration estimates and is effective for identifying critical path and float. PERT uses probabilistic three-point estimates (optimistic, most likely, pessimistic) to handle uncertainty in activity duration. CPM is useful for stable environments, while PERT provides better realism in uncertain contexts. Both support network-based planning and critical activity identification. The choice depends on risk level and estimation confidence."
      },
      {
        q: "Essay: Explain how crashing and fast tracking shorten schedules.",
        a: "Crashing and fast tracking are schedule compression techniques applied mainly to critical-path activities. Crashing shortens duration by assigning additional resources where cost-benefit is acceptable. Fast tracking compresses time by overlapping activities that were originally planned in sequence. Both techniques can accelerate delivery, but each introduces risk: crashing may increase cost and coordination complexity, while fast tracking may increase rework risk. Therefore, project managers must evaluate impact, update the schedule baseline, and secure formal approval for related changes. Used correctly, these methods help maintain deadlines under pressure while preserving governance."
      }
    ]
  },
  {
    id: "week8",
    title: "Week 8: Project Cost Management",
    subtitle: "Planning, estimating, budgeting, and controlling cost with EVM interpretation.",
    sections: [
      {
        id: "w8-foundation",
        title: "Cost Management Foundation",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Project cost management ensures project completion within approved budget.</li>
            <li>Processes: plan cost management, estimate costs, determine budget, control costs.</li>
            <li>Cost terms: profit, profit margin, life cycle costing, cash flow analysis.</li>
            <li><strong>Labor</strong> is often the largest project cost.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Type</th><th>Definition</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>Tangible</td><td>Easy to measure in money</td><td>Material purchase</td></tr>
                <tr><td>Intangible</td><td>Difficult to measure in money</td><td>Cost of delay/reputation</td></tr>
                <tr><td>Direct</td><td>Directly tied to product/service</td><td>Labor for construction</td></tr>
                <tr><td>Indirect</td><td>Not directly tied but necessary</td><td>Insurance, tax, overhead</td></tr>
                <tr><td>Sunk Cost</td><td>Already spent, irrelevant for new decisions</td><td>Past paperwork spending</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "w8-bac-definition",
        title: "Budget at Completion (BAC) and Baseline Concepts",
        badges: ["FORMULA", "HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>BAC (Budget at Completion)</strong> = total approved project budget at the start (baseline).</li>
            <li>BAC = sum of all cost estimates + contingency reserve, approved by sponsor and baseline authority.</li>
            <li>BAC is a fixed reference point used in EVM calculations to measure cost performance.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Cost Concept</th><th>Definition</th><th>When Set</th><th>Flexibility</th></tr></thead>
              <tbody>
                <tr><td><strong>BAC</strong></td><td>Approved project budget baseline</td><td>During cost planning; locked in baseline</td><td>Fixed; changes only via formal scope/change approval</td></tr>
                <tr><td><strong>EAC</strong></td><td>Forecasted total cost at completion based on current performance</td><td>During execution; recalculated regularly</td><td>Dynamic; updates as performance data arrives</td></tr>
                <tr><td><strong>PV (Planned Value)</strong></td><td>Budgeted cost of work scheduled</td><td>During planning; reflects schedule</td><td>Fixed per baseline timeline</td></tr>
                <tr><td><strong>AC (Actual Cost)</strong></td><td>Real money spent to date</td><td>Real-time as invoices arrive</td><td>Factual; no flexibility</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Earned Value Management (EVM) Relationship:</strong> BAC is the fixed baseline anchor for all EVM performance calculations. Key metrics: Cost Variance (CV), Schedule Variance (SV), Cost Performance Index (CPI), Schedule Performance Index (SPI), Estimate at Completion (EAC), and To-Complete Performance Index (TCPI). All formulas are covered in the EVM Formulas section below.</li>
            <li><strong>Example:</strong> If BAC = AED 500K and current CPI = 0.85, then EAC = 500K / 0.85 = AED 588K. Project is forecasted to cost AED 88K more than BAC.</li>
            <li><strong>PM responsibility:</strong> Protect BAC as a control reference. Significant variance signals need for corrective action or change request.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> BAC = baseline; EAC = forecast. Don't confuse them. If asked "what's the total budget?", answer BAC (approved baseline). If asked "how much will it actually cost?", calculate EAC.</div>
        `
      },
      {
        id: "w8-plan-baseline",
        title: "Cost Management Plan and Baseline",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Cost management plan elements:</strong> level of accuracy, units of measure, organizational procedure links, control thresholds, rules of performance measurement, reporting formats, and process descriptions.</li>
            <li>Estimates should include <strong>detailed resource descriptions</strong>, not only total numbers.</li>
            <li><strong>Cost baseline</strong> includes direct cost, indirect cost, and risk cost.</li>
          </ul>
        `
      },
      {
        id: "w8-estimates-reserves",
        title: "Reserves, Estimate Types, and Estimating Techniques",
        badges: ["FORMULA", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Contingency reserve</strong>: known-unknown risks, included in cost baseline.</li>
            <li><strong>Management reserve</strong>: unknown-unknown risks, not in cost baseline but in total budget.</li>
            <li>Estimate types: ROM (-50% to +100%), Budgetary (-10% to +25%), Definitive (-5% to +10%).</li>
            <li>Estimating techniques: analogous, bottom-up, three-point, parametric.</li>
            <li>Good estimates specify the people, materials, equipment, and effort assumptions behind the number.</li>
            <li>Learning curve: repeated work lowers unit cost over time.</li>
            <li>Common inaccuracy reasons: rushed estimates, low experience, optimism bias, pressure for fake precision.</li>
          </ul>
        `
      },
      {
        id: "w8-evm-core",
        title: "Earned Value Management (EVM) and Core Formulas",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED", "FORMULA"],
        html: `
          <ul>
            <li><strong>Planned Value (PV)</strong>: budgeted cost of work scheduled (what we planned to spend by now).</li>
            <li><strong>Earned Value (EV)</strong>: budgeted cost of work actually completed (what the finished work is worth).</li>
            <li><strong>Actual Cost (AC)</strong>: real money spent to date (what we actually paid).</li>
            <li>If EV &lt; AC -> over budget.</li>
            <li>If EV &gt; AC -> under budget.</li>
          </ul>
          <div class="formula-box">CV = EV - AC</div>
          <div class="formula-box">SV = EV - PV</div>
          <div class="formula-box">CPI = EV / AC</div>
          <div class="formula-box">SPI = EV / PV</div>
          <div class="formula-box">EAC = BAC / CPI</div>
          <div class="formula-box">ETC = EAC - AC</div>
          <div class="formula-box">TCPI = (BAC - EV) / (BAC - AC)</div>
          <div class="note">Dr emphasized: EVM interpretation, EAC, and TCPI are high-yield exam topics.</div>
        `
      },
      {
        id: "w8-interpretation",
        title: "EVM Chart Interpretation and Agile Cost Tracking",
        badges: ["EXAM QUESTION", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>EV below PV means behind schedule.</li>
            <li>AC above EV means over budget.</li>
            <li><strong>AC &gt; EV</strong> = over budget, <strong>EV &gt; AC</strong> = good performance.</li>
            <li><strong>AC = PV</strong> may look aligned with plan, but real control still depends on EV.</li>
            <li>EAC above BAC means expected overrun at completion.</li>
            <li><strong>EAC and TCPI</strong> are highly important because they forecast final cost and required future efficiency.</li>
            <li>AC line moving left/up from baseline trend indicates worsening cost behavior.</li>
            <li>Agile still uses cost control metrics, but tracks each sprint separately using the same calculations.</li>
          </ul>
        `
      }
    ],
    exam: [
      {
        q: "Define project cost management and list its processes.",
        a: "Project cost management consists of processes required to plan, estimate, budget, and control costs so that a project finishes within approved financial limits. The process sequence usually includes planning cost management, estimating costs, determining the budget, and controlling costs during execution. This knowledge area translates scope and schedule decisions into financial commitments and tracking discipline. Without it, projects become vulnerable to uncontrolled spending and poor decision quality. Therefore, cost management is essential for financial viability and sponsor confidence."
      },
      {
        q: "Compare contingency reserve and management reserve.",
        a: "Contingency reserve is allocated for identified risks, often called known-unknowns, and is included in the cost baseline. Management reserve addresses unknown-unknown risks that cannot be reasonably predicted and is not included in the baseline, although it is part of total funding. This distinction supports transparent governance by separating expected uncertainty from truly unexpected events. Using both appropriately improves budget realism and response readiness."
      },
      {
        q: "Essay: Explain EVM and why EAC and TCPI are important.",
        a: "Earned Value Management integrates scope, schedule, and cost performance using planned value, earned value, and actual cost. It allows project managers to evaluate whether the project is on budget and on schedule in objective monetary terms. Derived indicators such as CPI and SPI show performance efficiency, while Estimate at Completion forecasts final cost based on current trends. TCPI indicates the required future cost efficiency to meet a target budget, helping managers judge whether recovery is realistic. For example, a TCPI well above 1 signals that significantly better performance is required in remaining work. In conclusion, EVM, EAC, and TCPI provide decision-critical insight for proactive cost control."
      }
    ]
  },
  {
    id: "week9",
    title: "Week 9: Project Quality Management",
    subtitle: "Planning quality standards, assurance mechanisms, control measures, and continuous improvement.",
    sections: [
      {
        id: "w9-core",
        title: "Quality Definition, Process, and PM Responsibilities",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Quality</strong> = degree to which deliverable meets stakeholder needs, specifications, and performance requirements.</li>
            <li>Quality is <strong>not</strong> luxury or premium features; it is <strong>fitness for purpose</strong>.</li>
            <li><strong>Three levels of quality management:</strong>
              <ol>
                <li><strong>Quality Planning</strong> (Initiating/Planning) - Define quality standards, processes, and metrics.</li>
                <li><strong>Quality Assurance</strong> (Planning/Execution) - Evaluate whether project will satisfy quality standards.</li>
                <li><strong>Quality Control</strong> (Monitoring/Controlling) - Monitor and test to ensure conformance.</li>
              </ol>
            </li>
            <li>Quality standards must be measurable, achievable, and aligned with project objectives and business strategy.</li>
            <li><strong>Quality vs Cost tradeoff:</strong> Higher quality often costs more upfront but reduces rework and lifecycle costs.</li>
            <li>Project manager is accountable for embedding quality processes into all knowledge areas.</li>
          </ul>
          <div class="note">Dr emphasized: Quality is everyone's responsibility, not just a testing team function. Prevention is cheaper than correction.</div>
        `
      },
      {
        id: "w9-planning",
        title: "Quality Planning and Standards",
        badges: ["DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Quality planning inputs:</strong> Project charter, scope statement, stakeholder requirements, cost/schedule constraints.</li>
            <li><strong>Quality planning outputs:</strong>
              <ul>
                <li>Quality standards and acceptance criteria</li>
                <li>Process improvement plan</li>
                <li>Metrics and measurement approach</li>
                <li>Tools and inspections schedule</li>
              </ul>
            </li>
            <li><strong>Quality standards examples:</strong>
              <ul>
                <li>Defect rate &lt; 1% in software testing</li>
                <li>Documentation completeness 100%</li>
                <li>Performance benchmarks (response time &lt; 2 sec)</li>
                <li>Compliance with regulatory standards (ISO, GDPR, etc.)</li>
              </ul>
            </li>
            <li>Standards should be documented in Quality Management Plan (part of Project Management Plan).</li>
            <li>Stakeholder approval of standards reduces later disputes about acceptance.</li>
          </ul>
        `
      },
      {
        id: "w9-assurance",
        title: "Quality Assurance: Processes, Audits, and Improvement",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Quality Assurance (QA)</strong> = continuous evaluation of processes and outputs to ensure compliance with quality standards.</li>
            <li>QA is <strong>process-focused</strong>, not product-focused (contrast with Quality Control).</li>
            <li><strong>Key QA activities:</strong>
              <ul>
                <li>Audit processes (reviews, team capability assessments)</li>
                <li>Monitor adherence to standards and procedures</li>
                <li>Collect lessons learned and feedback</li>
                <li>Recommend process improvements</li>
              </ul>
            </li>
            <li><strong>QA tools:</strong> Process audits, quality metrics review, checklists, peer reviews, benchmarking.</li>
            <li><strong>Quality audit</strong> = systematic, independent examination of project processes against standards.</li>
            <li>Audits should be <strong>non-punitive</strong>; focus is on improvement, not blame.</li>
            <li>QA outputs feed into corrective actions (Perform Integrated Change Control process).</li>
          </ul>
        `
      },
      {
        id: "w9-control",
        title: "Quality Control: Testing, Inspection, and Defect Management",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Quality Control (QC)</strong> = monitoring project outputs (deliverables) to ensure they meet quality standards.</li>
            <li>QC is <strong>product-focused</strong>; it measures <strong>what was produced</strong>.</li>
            <li><strong>Key QC activities:</strong>
              <ul>
                <li>Testing and inspections</li>
                <li>Defect identification and logging</li>
                <li>Accepting or rejecting deliverables</li>
                <li>Root cause analysis for failures</li>
              </ul>
            </li>
            <li><strong>QC tools:</strong> Test scripts, inspection checklists, statistical sampling, control charts, Pareto analysis.</li>
            <li><strong>Defect:</strong> Any variation from accepted standards (e.g., bug, missing requirement, performance lag).</li>
            <li><strong>Defect log:</strong> Tracks identified defects, severity, status, owner, resolution date.</li>
            <li>QC must occur throughout the project, not just at end (shift-left testing principle in Agile).</li>
            <li><strong>Cost of Poor Quality (COPQ)</strong> = cost of rework, recalls, customer dissatisfaction, reputation damage.</li>
          </ul>
        `
      },
      {
        id: "w9-seven-tools",
        title: "Seven Quality Tools and Statistical Methods",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Tool</th><th>Purpose</th><th>Output/Use</th></tr></thead>
              <tbody>
                <tr><td><strong>Cause-Effect (Fishbone)</strong></td><td>Identify root causes of quality problems</td><td>Diagram showing factors contributing to defect</td></tr>
                <tr><td><strong>Pareto Chart</strong></td><td>Prioritize vital few problems</td><td>Ordered bar chart showing 80/20 rule (focus on top 20% of causes)</td></tr>
                <tr><td><strong>Histogram</strong></td><td>Show frequency distribution of data</td><td>Bar chart revealing variation patterns and normal/abnormal distribution</td></tr>
                <tr><td><strong>Control Chart</strong></td><td>Track process performance over time</td><td>Line chart with upper/lower control limits; detect trends and out-of-control states</td></tr>
                <tr><td><strong>Scatter Diagram</strong></td><td>Identify correlation between variables</td><td>Plot showing if two factors are related (e.g., team size vs defect rate)</td></tr>
                <tr><td><strong>Check Sheet</strong></td><td>Collect and organize data systematically</td><td>Template for recording observations, defects, or counts</td></tr>
                <tr><td><strong>Flowchart</strong></td><td>Map process sequence and decision points</td><td>Diagram showing steps, inputs, outputs, and loops in a process</td></tr>
              </tbody>
            </table>
          </div>
          <div class="note"><strong>Exam tip:</strong> Be able to name each tool, explain what it does, and give an example. Fishbone + Pareto are most frequently tested.</div>
        `
      },
      {
        id: "w9-six-sigma",
        title: "Six Sigma, DMAIC, and Process Improvement",
        badges: ["DR EMPHASIZED", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Six Sigma</strong> = data-driven methodology to reduce defects and improve process stability.</li>
            <li>Goal: achieve 3.4 defects per million opportunities (DPMO).</li>
            <li><strong>Six Sigma DMAIC cycle:</strong></li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Phase</th><th>Focus</th><th>Key Activities</th></tr></thead>
              <tbody>
                <tr><td><strong>Define</strong></td><td>Problem statement &amp; customer need</td><td>Charter project, gather VOC (voice of customer), set goals</td></tr>
                <tr><td><strong>Measure</strong></td><td>Current performance baseline</td><td>Collect data, establish metrics, measure variation</td></tr>
                <tr><td><strong>Analyze</strong></td><td>Root causes of variation</td><td>Statistical analysis, hypothesis testing, identify vital few causes</td></tr>
                <tr><td><strong>Improve</strong></td><td>Design solutions &amp; test</td><td>Brainstorm, pilot test, validate effectiveness, update process</td></tr>
                <tr><td><strong>Control</strong></td><td>Sustain improvements</td><td>Document new process, train team, monitor KPIs, adjust as needed</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>Six Sigma roles: Champion (sponsor), Black Belt (project leader), Green Belt (team member).</li>
            <li>Difference from Agile: Six Sigma is structured and measurement-heavy; Agile is iterative and feedback-driven.</li>
          </ul>
        `
      },
      {
        id: "w9-cost-of-quality",
        title: "Cost of Quality (CoQ) Analysis",
        badges: ["EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Cost of Quality</strong> = all costs incurred to achieve and maintain project quality.</li>
            <li><strong>CoQ Categories:</strong>
              <ol>
                <li><strong>Prevention Costs</strong> (training, process design, prevention tools) - Best to invest here</li>
                <li><strong>Appraisal Costs</strong> (inspections, testing, audits)</li>
                <li><strong>Internal Failure Costs</strong> (rework, scrap, redesign before delivery)</li>
                <li><strong>External Failure Costs</strong> (recalls, warranty, reputation damage, legal) - Most expensive!</li>
              </ol>
            </li>
            <li><strong>CoQ Principle:</strong> Higher upfront prevention spending often reduces total CoQ by avoiding expensive failures.</li>
            <li><strong>Example ROI:</strong> Investing AED 1000 in testing tools prevents AED 10,000 in external failure costs.</li>
            <li>Project managers use CoQ analysis to justify quality investments to stakeholders.</li>
            <li class="less-emphasized">Advanced: CoQ optimization targets are often 1-4% of project budget for high-reliability projects.</li>
          </ul>
        `
      },
      {
        id: "w9-iso-maturity",
        title: "ISO 9000, Maturity Models, and Quality Standards",
        badges: ["LESS EMPHASIZED"],
        html: `
          <ul>
            <li><strong>ISO 9000 Family</strong> = international standards for quality management systems.</li>
            <li>ISO 9001 = most common; focuses on organizational capability to deliver conforming products/services consistently.</li>
            <li><strong>ISO 9001 elements:</strong> Process approach, leadership commitment, risk management, performance evaluation, continual improvement.</li>
            <li><strong>Certification:</strong> Organizations undergo audit to prove compliance; certification is valid for 3 years with annual surveillance.</li>
            <li><strong>Maturity Models</strong> (CMM, CMMI) = frameworks to assess organizational process maturity and guide improvement roadmaps.</li>
            <li>Levels typically range from Ad-Hoc (1) to Repeatable (2) to Defined (3) to Managed (4) to Optimizing (5).</li>
            <li>Higher maturity = more predictable, controlled, and efficient processes.</li>
            <li class="less-emphasized">Other standards: ITIL (IT service management), TQM (Total Quality Management), PMBOK quality principles.</li>
          </ul>
        `
      },
      {
        id: "w9-qa-vs-qc",
        title: "Quality Assurance vs Quality Control Comparison",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Aspect</th><th>Quality Assurance (QA)</th><th>Quality Control (QC)</th></tr></thead>
              <tbody>
                <tr><td><strong>Focus</strong></td><td>Process and system</td><td>Product/deliverable</td></tr>
                <tr><td><strong>Timing</strong></td><td>Before production (preventive)</td><td>During &amp; after production (detective)</td></tr>
                <tr><td><strong>Question Answered</strong></td><td>Are we doing things right?</td><td>Did we do it right?</td></tr>
                <tr><td><strong>Method</strong></td><td>Audits, process reviews, inspections of methodology</td><td>Testing, inspections of output, measurements</td></tr>
                <tr><td><strong>Output</strong></td><td>Process improvements, corrective actions, training recommendations</td><td>Accepted/rejected deliverables, defect log, quality metrics</td></tr>
                <tr><td><strong>Mindset</strong></td><td>Proactive (prevent problems)</td><td>Reactive (detect and fix problems)</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>QA is <strong>prevention-oriented</strong> and improves the process before defects occur.</li>
            <li>QC is <strong>detection-oriented</strong> and checks whether the output conforms to requirements.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> If question asks about process audit or methodology review, it's QA. If about testing or inspection of deliverables, it's QC.</div>
        `
      },
      {
        id: "w9-precision-accuracy",
        title: "Precision vs Accuracy: A Critical Quality Distinction",
        badges: ["HIGH PRIORITY", "EXAM QUESTION", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Precision</strong> = repeatability or consistency. If you measure the same thing multiple times with precise equipment, you get very similar results (even if they're all wrong).</li>
            <li><strong>Accuracy</strong> = closeness to the true or target value. A measurement is accurate if it hits the correct target (even if individual measurements vary slightly).</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Concept</th><th>Definition</th><th>Example</th><th>Project Impact</th></tr></thead>
              <tbody>
                <tr><td><strong>Precision</strong></td><td>Results cluster tightly together (low variation)</td><td>Three measurements: 10.1, 10.2, 10.0 inches</td><td>Consistent process; can calibrate and improve</td></tr>
                <tr><td><strong>Accuracy</strong></td><td>Results match the true target value</td><td>Measurements average 10.0 inches, true length is 10.0 inches</td><td>Meets requirement; stakeholder satisfied</td></tr>
                <tr><td><strong>High Precision + Low Accuracy</strong></td><td>Consistent but wrong; all wrong by same amount</td><td>Three measurements: 8.1, 8.0, 8.2 inches (true = 10.0)</td><td>Process is broken; needs major recalibration</td></tr>
                <tr><td><strong>Low Precision + High Accuracy</strong></td><td>Scattered around target; on average correct</td><td>Three measurements: 9.5, 10.3, 10.2 inches (true = 10.0 avg)</td><td>Unreliable but lucky; need to reduce variation</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Project lesson:</strong> A well-defined process (high precision) that's aimed at the right target (accuracy) produces quality.</li>
            <li>If you have a precise process but it's misaligned, all outputs will be consistently wrong.</li>
            <li>If you have an accurate average but high variation, results are unpredictable and risky.</li>
            <li>Best practice: design for both precision (low variation, repeatability) and accuracy (correctness to requirement).</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Precision = "tight cluster", Accuracy = "on target". Don't confuse them; they're independent concepts.</div>
        `
      },
      {
        id: "w9-grade-quality",
        title: "Grade vs Quality: Not the Same Thing",
        badges: ["HIGH PRIORITY", "EXAM QUESTION", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Grade</strong> = category or level of a product (e.g., first-class, economy, budget).</li>
            <li><strong>Quality</strong> = degree to which a product meets its specified requirements for its grade.</li>
            <li><strong>Critical insight:</strong> A low-grade product can be HIGH QUALITY if it fully meets its intended specifications. Conversely, a high-grade product can be LOW QUALITY if it fails to meet its specifications.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Concept</th><th>Definition</th><th>Example</th><th>Project Implication</th></tr></thead>
              <tbody>
                <tr><td><strong>Grade</strong></td><td>Feature set, luxury level, materials tier</td><td>Budget hotel (low grade) vs 5-star hotel (high grade)</td><td>Sponsor approves grade during planning; scope includes grade</td></tr>
                <tr><td><strong>Quality</strong></td><td>Conformance to specified requirements for the grade</td><td>Budget hotel with clean rooms, working A/C, friendly staff = high quality for its grade</td><td>PM must deliver quality at the approved grade level</td></tr>
                <tr><td><strong>Low Grade, High Quality</strong></td><td>Basic but well-executed deliverable</td><td>Economy airline ticket: basic service but on-time, safe, professional = quality</td><td>Scope approved as economy; must deliver economy quality</td></tr>
                <tr><td><strong>High Grade, Low Quality</strong></td><td>Fancy features that don't work correctly</td><td>Luxury hotel with fancy lobby but broken elevators, poor service = quality failure</td><td>Failure to deliver; stakeholder dissatisfaction despite premium scope</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>For project managers:</strong> Quality control must verify that outputs meet the requirements of the APPROVED GRADE, not some other grade.</li>
            <li>If requirements say "basic reporting" but you deliver "enterprise-grade fancy reports", that's not quality—that's scope creep and over-engineering.</li>
            <li>Conversely, if requirements say "bank-grade security" but you deliver "basic encryption", that's quality failure even if it technically works.</li>
            <li><strong>Lesson:</strong> Quality = fitness for purpose at the approved grade level. Approval of grade is a SCOPE issue; ensuring quality at that grade is a CONTROL issue.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Grade = level; Quality = conformance. Don't confuse them. A project can have perfect quality at a low grade level.</div>
        `
      }
    ],
    exam: [
      {
        q: "Define quality in project management and explain why it matters.",
        a: "Quality in project management refers to the degree to which a deliverable meets stakeholder needs and specified performance requirements. Quality is not luxury but fitness for purpose; it means delivering what was promised in the way it was promised. Quality matters because poor quality leads to rework, customer dissatisfaction, reputation damage, recalls, and external failure costs that far exceed prevention investments. Therefore, integrating quality throughout the project life cycle is critical to project success and organizational value."
      },
      {
        q: "Compare Quality Planning, Quality Assurance, and Quality Control.",
        a: "Quality Planning (Initiating/Planning) defines what quality standards and metrics will apply to the project. Quality Assurance (Planning/Execution) continuously evaluates whether processes are capable of achieving those standards through audits and process reviews; it prevents defects. Quality Control (Monitoring/Controlling) monitors actual deliverables against standards through testing and inspection; it detects and documents defects. In sequence: plan what will be accepted, ensure the process is sound, then verify the output meets the plan. All three are necessary for comprehensive quality management."
      },
      {
        q: "Essay: Explain Six Sigma DMAIC and why organizations use it.",
        a: "Six Sigma is a data-driven methodology aiming to reduce defects to near-zero (3.4 per million). Its DMAIC cycle begins by defining the problem and customer voice, then measures current state performance, analyzes root causes through statistics, implements targeted improvements, and controls the new state to sustain gains. Organizations use DMAIC because it replaces gut feeling with evidence, links process changes to measurable outcomes, and prevents problems from recurring. For example, a delivery company using DMAIC reduced package damage by 70% by identifying root causes and testing solutions before full rollout. Therefore, DMAIC improves reliability and customer satisfaction while strengthening continuous improvement culture."
      },
      {
        q: "Compare the seven quality tools and identify when to use each.",
        a: "Fishbone (cause-effect) diagram maps factors contributing to a problem, helping teams identify root causes in brainstorms. Pareto chart ranks causes from highest to lowest impact, supporting the 80/20 rule to focus effort on the vital few causes. Histogram shows frequency distribution to reveal patterns and abnormality. Control chart tracks process performance over time with upper and lower limits to signal when a process drifts out of control. Scatter diagram reveals correlation between variables. Check sheet collects data systematically. Flowchart maps process steps and decisions. Together they form a practical quality improvement toolkit."
      },
      {
        q: "What is Cost of Quality (CoQ) and how does it guide quality investment decisions?",
        a: "Cost of Quality includes all expenses to achieve and maintain project quality: prevention, appraisal, internal failure, and external failure costs. External failure is usually most expensive. CoQ guides investment by showing that upfront prevention spending often prevents larger external failure costs. For example, AED 1000 invested in testing tools may prevent AED 10,000 in customer recall costs. Project managers use CoQ analysis to justify quality spending as an investment that protects profitability and reputation."
      }
    ]
  },
  {
    id: "chapter12",
    title: "Chapter 12: Project Risk Management",
    subtitle: "Identifying, analyzing, responding to, and controlling uncertainty.",
    sections: [
      {
        id: "c12-core",
        title: "Risk Definition, Utility, and Tolerance",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Risk can be <strong>negative (threat)</strong> or <strong>positive (opportunity)</strong>.</li>
            <li><strong>Risk utility</strong> is stakeholder satisfaction under uncertainty (risk-averse, risk-seeking, risk-neutral behavior).</li>
            <li><strong>Risk tolerance</strong> means how much risk a stakeholder is willing to accept.</li>
            <li>Risk should be managed continuously, not as a one-time checklist.</li>
            <li><strong>Risk appetite</strong> is the level of uncertainty the organization is willing to pursue or retain.</li>
            <li><strong>Risk threshold</strong> is the point where a specific risk becomes unacceptable and action is required.</li>
          </ul>
        `
      },
      {
        id: "c12-processes-plan",
        title: "Risk Management Processes and Plan",
        badges: ["EXAM QUESTION"],
        html: `
          <ol>
            <li>Plan risk management</li>
            <li>Identify risks</li>
            <li>Perform qualitative analysis</li>
            <li>Perform quantitative analysis</li>
            <li>Plan risk responses</li>
            <li>Control risks</li>
          </ol>
          <ul>
            <li>Risk management plan topics: methodology, roles, budget/schedule, categories, probability/impact, tolerance, tracking, documentation.</li>
            <li>Contingency plans are preplanned responses; fallback plans activate if primary responses fail.</li>
          </ul>
        `
      },
      {
        id: "c12-identification-tools",
        title: "Risk Categories and Identification Tools",
        badges: ["DR EMPHASIZED"],
        html: `
          <ul>
            <li>Common categories: market, financial, technology, people, structure/process.</li>
            <li>Risk breakdown structure organizes categories hierarchically.</li>
            <li>Identification tools: brainstorming, Delphi, interviewing, SWOT.</li>
            <li>Risk register contains risk ID, rank, description, category, root cause, trigger, response, owner, probability/impact, status.</li>
            <li>Watch list tracks low-priority risks for monitoring.</li>
            <li><strong>Triggers</strong> are warning signs that show a risk is becoming more likely or is about to occur.</li>
          </ul>
        `
      },
      {
        id: "c12-emv",
        title: "Expected Monetary Value (EMV) Analysis",
        badges: ["FORMULA", "HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>EMV</strong> = quantitative risk assessment combining probability and impact into a single expected value.</li>
            <li>Used to prioritize risks by their expected financial exposure and to justify response investments.</li>
          </ul>
          <div class="formula-box">EMV = Probability × Impact (in monetary terms)</div>
          <ul>
            <li><strong>For Threats (Negative Risks):</strong></li>
            <li>Example: 30% probability of AED 100,000 cost overrun → EMV = 0.30 × 100,000 = AED 30,000 expected exposure.</li>
            <li>Interpretation: Statistically, expect to lose AED 30,000 due to this risk over many projects.</li>
            <li><strong>For Opportunities (Positive Risks):</strong></li>
            <li>Example: 20% probability of AED 50,000 cost savings → EMV = 0.20 × 50,000 = AED 10,000 expected benefit.</li>
            <li>Interpretation: Statistically, expect to gain AED 10,000 due to this opportunity over many projects.</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Risk</th><th>Probability</th><th>Impact</th><th>EMV</th><th>Response Priority</th></tr></thead>
              <tbody>
                <tr><td>Vendor delay</td><td>40%</td><td>AED 50K</td><td>AED 20K</td><td>High (respond)</td></tr>
                <tr><td>Weather issue</td><td>10%</td><td>AED 200K</td><td>AED 20K</td><td>Medium (monitor)</td></tr>
                <tr><td>Efficiency gain</td><td>25%</td><td>AED 60K</td><td>AED 15K</td><td>Medium (pursue)</td></tr>
                <tr><td>Minor defect</td><td>80%</td><td>AED 2K</td><td>AED 1.6K</td><td>Low (accept)</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Decision Rule:</strong> Rank risks by EMV. Allocate response resources to highest-EMV risks first.</li>
            <li><strong>Investment justification:</strong> If a risk has EMV = AED 30,000, spending AED 5,000 on mitigation may be cost-effective.</li>
            <li><strong>Limitation:</strong> EMV assumes many projects; for one unique project, high-probability low-impact and low-probability high-impact risks may both require attention regardless of EMV.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> EMV is a quantitative tool for prioritizing risks. Higher EMV = higher response priority. Use with Probability-Impact Matrix for complete analysis.</div>
        `
      },
      {
        id: "c12-analysis-responses",
        title: "Qualitative/Quantitative Analysis and Responses",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Qualitative analysis: probability/impact matrix, top ten risk tracking, expert judgment.</li>
            <li>Quantitative analysis (large/complex projects): decision tree, simulation, Monte Carlo, sensitivity analysis.</li>
            <li>Negative risk responses: avoid, accept, transfer, mitigate.</li>
            <li>Positive risk responses: exploit, share, enhance, accept.</li>
            <li>Workarounds are unplanned responses when no contingency exists.</li>
            <li>Control outputs include change requests, performance updates, plan/document updates, and OPA updates.</li>
            <li><strong>Contingency plans</strong> are prepared in advance; <strong>fallback plans</strong> are used if the original response fails.</li>
          </ul>
          <div class="diagram-card">
            <h4>Probability-Impact Matrix</h4>
            <div class="matrix-grid">
              <div class="matrix-axis matrix-axis--vertical">Impact</div>
              <div class="matrix-board">
                <div class="matrix-cell med">High impact<br>Low probability</div>
                <div class="matrix-cell high">High impact<br>Medium probability</div>
                <div class="matrix-cell critical">High impact<br>High probability</div>
                <div class="matrix-cell low">Medium impact<br>Low probability</div>
                <div class="matrix-cell med">Medium impact<br>Medium probability</div>
                <div class="matrix-cell high">Medium impact<br>High probability</div>
                <div class="matrix-cell low">Low impact<br>Low probability</div>
                <div class="matrix-cell low">Low impact<br>Medium probability</div>
                <div class="matrix-cell med">Low impact<br>High probability</div>
              </div>
              <div></div>
              <div class="matrix-axis">Probability</div>
            </div>
          </div>
          <div class="note">Less emphasized: very detailed Monte Carlo step-by-step mechanics; focus on purpose and interpretation.</div>
        `
      }
    ],
    exam: [
      {
        q: "Define project risk management and list its key processes.",
        a: "Project risk management is the structured approach used to identify, analyze, respond to, and control uncertainty that may affect project objectives. Its core processes include planning risk management, identifying risks, performing qualitative and quantitative analysis, planning responses, and controlling risks. This sequence allows teams to prioritize major threats and opportunities and allocate responses efficiently. Effective risk management improves predictability, protects value, and increases resilience."
      },
      {
        q: "Compare qualitative and quantitative risk analysis.",
        a: "Qualitative analysis prioritizes risks using relative scales such as probability and impact ratings. It is faster and often sufficient for small to medium projects. Quantitative analysis uses numerical modeling, such as decision trees and simulations, to estimate financial or schedule outcomes and confidence ranges. It is more data-intensive and typically used for large, complex projects. Together, both methods support balanced decision-making."
      },
      {
        q: "Essay: Explain risk response strategies for threats and opportunities.",
        a: "After identifying and analyzing risks, project teams select response strategies based on impact, probability, and cost-effectiveness. For negative risks, strategies include avoidance, acceptance, transfer, and mitigation. For positive risks, strategies include exploitation, sharing, enhancement, and acceptance. The selected strategy should be documented with clear ownership, triggers, and contingency or fallback logic. For example, a technology delay risk might be mitigated with phased testing and vendor backup options. In conclusion, appropriate response strategy selection converts risk analysis into practical project control and better outcome achievement."
      }
    ]
  },
  {
    id: "chapter14",
    title: "Chapter 14: Project Stakeholder Management",
    subtitle: "Identifying, engaging, and managing stakeholder expectations and influence.",
    sections: [
      {
        id: "c14-core",
        title: "Stakeholder Definition and Importance",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Stakeholder: anyone who affects, is affected by, or has interest in the project.</li>
            <li>Strong engagement reduces complexity and increases project success likelihood.</li>
            <li>Poor stakeholder handling causes conflict, low motivation, delays, and possible project stoppage.</li>
            <li>Success is not only deadline compliance; stakeholder satisfaction and expectation alignment matter.</li>
            <li>Communication objectives include informing, engaging, influencing, and securing decisions.</li>
          </ul>
        `
      },
      {
        id: "c14-processes-register",
        title: "Processes, Internal/External Stakeholders, and Register",
        badges: ["EXAM QUESTION", "DR EMPHASIZED"],
        html: `
          <ol>
            <li>Identify stakeholders</li>
            <li>Plan stakeholder management</li>
            <li>Manage stakeholder engagement</li>
            <li>Control stakeholder engagement</li>
          </ol>
          <ul>
            <li>Internal stakeholders: sponsor, team, support staff, internal customers, managers.</li>
            <li>External stakeholders: government, suppliers, regulators, external users.</li>
            <li>Stakeholder register includes identification data, assessment data, and classification data.</li>
          </ul>
        `
      },
      {
        id: "c14-classification-engagement",
        title: "Classification Models and Engagement Levels",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Power/interest grid helps define management approach.</li>
            <li>Engagement levels: unaware, resistant, neutral, supportive, leading.</li>
            <li>Engagement can change during project; monitoring and adjustment are required.</li>
            <li>Neutral stakeholders may reduce momentum; resistant stakeholders need root-cause handling.</li>
            <li>Supportive and leading stakeholders should be protected and actively involved.</li>
          </ul>
          <div class="diagram-card">
            <h4>Power-Interest Grid</h4>
            <svg viewBox="0 0 720 350" class="svg-diagram" role="img" aria-label="Stakeholder power interest grid">
              <rect x="120" y="40" width="500" height="240" class="diagram-panel"></rect>
              <line x1="370" y1="40" x2="370" y2="280" stroke="currentColor" stroke-width="3"></line>
              <line x1="120" y1="160" x2="620" y2="160" stroke="currentColor" stroke-width="3"></line>
              <text x="70" y="175" class="diagram-label">High Power</text>
              <text x="70" y="315" class="diagram-label">Low Power</text>
              <text x="250" y="325" class="diagram-label">Low Interest</text>
              <text x="455" y="325" class="diagram-label">High Interest</text>
              <text x="210" y="105" text-anchor="middle" class="diagram-label">Keep Satisfied</text>
              <text x="495" y="105" text-anchor="middle" class="diagram-label">Manage Closely</text>
              <text x="210" y="225" text-anchor="middle" class="diagram-label">Monitor</text>
              <text x="495" y="225" text-anchor="middle" class="diagram-label">Keep Informed</text>
            </svg>
          </div>
        `
      },
      {
        id: "c14-engagement-assessment",
        title: "Stakeholder Engagement Assessment Matrix",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Stakeholder Engagement Assessment Matrix</strong> = tool to track current vs desired stakeholder engagement levels and plan actions to close gaps.</li>
            <li>Typical engagement levels: Unaware, Resistant, Neutral, Supportive, Leading.</li>
            <li>Matrix shows where each stakeholder IS now (current state) vs where they SHOULD BE (desired state).</li>
          </ul>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Stakeholder Name</th><th>Current Engagement</th><th>Desired Engagement</th><th>Gap</th><th>Action Plan</th></tr></thead>
              <tbody>
                <tr><td>Project Sponsor</td><td>Supportive</td><td>Leading</td><td>+1 level</td><td>Regular executive briefings, escalation authority</td></tr>
                <tr><td>Engineering Lead</td><td>Neutral</td><td>Supportive</td><td>+1 level</td><td>Include in design decisions, show early results</td></tr>
                <tr><td>Finance Officer</td><td>Resistant</td><td>Neutral</td><td>+1 level</td><td>Cost-benefit presentation, budget transparency</td></tr>
                <tr><td>End User Group</td><td>Unaware</td><td>Supportive</td><td>+2 levels</td><td>Product demos, user feedback sessions, training plan</td></tr>
                <tr><td>IT Operations</td><td>Supportive</td><td>Supportive</td><td>None</td><td>Maintain engagement; regular updates</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>How to use:</strong> At project start, assess each stakeholder's CURRENT engagement. Compare against DESIRED state. Prioritize actions to move stakeholders toward desired level.</li>
            <li><strong>Resistant stakeholders:</strong> Identify root cause of resistance (fear, misunderstanding, conflicting priorities). Address directly before escalating.</li>
            <li><strong>Unaware stakeholders:</strong> Inform first; engagement often follows once they understand impact.</li>
            <li><strong>Leading stakeholders:</strong> Leverage as project advocates and change agents.</li>
            <li><strong>Monitor continuously:</strong> Engagement levels can shift during project. Re-assess quarterly and adjust actions.</li>
          </ul>
          <div class="note"><strong>Exam tip:</strong> Engagement assessment matrix connects current state (where stakeholders are) to desired state (where they need to be), with explicit actions to bridge the gap.</div>
        `
      },
      {
        id: "c14-plan-control-tools",
        title: "Plan, Expectation Management, Issue Log, and Control",
        badges: ["DR EMPHASIZED", "EXAM QUESTION"],
        html: `
          <ul>
            <li>Stakeholder plan may include engagement levels, communication requirements, strategies, and update methods.</li>
            <li>Sensitive stakeholder plan content should not be openly distributed to all parties.</li>
            <li>Issue log tracks unresolved issues and supports expectation management.</li>
            <li>Kick-off meetings should be active dialogue sessions, not passive attendance events.</li>
            <li>Good practice: clarify roles early, explain consequences, avoid surprises, keep contingency plans.</li>
            <li>You cannot fully control stakeholders, but you can control engagement mechanisms.</li>
            <li>Different stakeholders may need different formats: dashboards for executives, detailed reports for specialists, and escalation notes for sponsors.</li>
          </ul>
          <div class="note">Dr emphasized: communication quality and expectation alignment with powerful stakeholders.</div>
        `
      }
    ],
    exam: [
      {
        q: "Define stakeholder management and explain why it is critical.",
        a: "Project stakeholder management is the set of processes used to identify stakeholders, plan engagement strategies, manage relationships, and control engagement throughout the project life cycle. It is critical because stakeholders influence scope decisions, resource support, approvals, and final acceptance. If expectations are not managed, projects can face delays, resistance, and governance disruption even when technical work is strong. Therefore, stakeholder management is a core determinant of project success."
      },
      {
        q: "Compare internal and external stakeholders.",
        a: "Internal stakeholders are part of the organization or project structure, such as sponsors, team members, and managers. External stakeholders are outside the project team or organization, such as suppliers, regulators, and public authorities. Internal stakeholders often drive execution and governance, while external stakeholders may shape constraints, compliance, and delivery conditions. Managing both groups requires tailored communication and engagement approaches."
      },
      {
        q: "Essay: Explain stakeholder engagement levels and management strategy.",
        a: "Stakeholder engagement levels usually range from unaware and resistant to neutral, supportive, and leading. Effective management requires identifying each stakeholder’s current and desired state, then designing communication and involvement actions to close the gap. For example, unaware stakeholders may need orientation sessions, while resistant stakeholders require concern diagnosis and targeted negotiation. Supportive stakeholders should be empowered to sustain project momentum and influence broader acceptance. The project manager should track issues in an issue log and adjust strategies continuously as context changes. In conclusion, engagement management transforms stakeholder diversity into aligned project contribution."
      }
    ]
  }
];

const HIGH_EMPHASIS = [
  "Agile vs Traditional",
  "Scope Creep",
  "WBS and decomposition",
  "Critical Path and Float",
  "CPM vs PERT",
  "Crashing and Fast Tracking",
  "Three-point estimate formula",
  "EVM formulas and interpretation",
  "CPI / SPI interpretation",
  "EAC and TCPI",
  "Quality Assurance vs Quality Control",
  "Precision vs Accuracy",
  "Six Sigma DMAIC",
  "Risk Probability-Impact Matrix",
  "Risk responses (threats and opportunities)",
  "Stakeholder engagement and satisfaction",
  "Stakeholder Power-Interest Grid",
  "Communication and expectations",
  "Integrated change control",
  "Lessons learned and organizational learning"
];

const LESS_EMPHASIS = [
  "Long company examples",
  "Quality guru history details",
  "Detailed ISO history",
  "Detailed software brand names",
  "Very long Monte Carlo procedural steps"
];

let activePageId = "dashboard";

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
}

function isMobileViewport() {
  return window.innerWidth <= 768;
}

function syncMobileSidebarState(isOpen) {
  const sidebar = document.querySelector(".sidebar");
  const overlay = el("mobile-overlay");
  const hamburger = el("hamburger-menu");

  if (!sidebar || !overlay || !hamburger) return;

  sidebar.classList.toggle("open", isOpen);
  overlay.hidden = !isOpen;
  document.body.classList.toggle("sidebar-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileSidebar() {
  syncMobileSidebarState(false);
}

function toggleMobileSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;
  syncMobileSidebarState(!sidebar.classList.contains("open"));
}

function el(id) {
  return document.getElementById(id);
}

function getStudiedSet() {
  try {
    const raw = localStorage.getItem(STUDIED_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (_err) {
    return new Set();
  }
}

function saveStudiedSet(set) {
  localStorage.setItem(STUDIED_KEY, JSON.stringify([...set]));
}

function buildSidebar() {
  const nav = el("study-nav");
  nav.innerHTML = "";

  const links = [
    { id: "dashboard", label: "Dashboard" },
    ...CHAPTERS.map((chapter) => ({ id: chapter.id, label: chapter.title })),
    { id: "exam-focus", label: "Exam Focus" },
    { id: "formula-sheet", label: "Formula Sheet" }
  ];

  const studied = getStudiedSet();

  links.forEach((item) => {
    const a = document.createElement("a");
    a.href = `#${item.id}`;
    a.className = "nav-link";
    a.dataset.target = item.id;
    const done = studied.has(item.id) ? '<span class="done-dot">✓</span>' : "";
    a.innerHTML = `${item.label}${done}`;
    a.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo(item.id);
    });
    nav.appendChild(a);
  });
}

function buildDashboard() {
  const holder = el("chapter-grid");
  holder.innerHTML = "";

  const studied = getStudiedSet();

  CHAPTERS.forEach((chapter) => {
    const card = document.createElement("article");
    card.className = "chapter-card";
    card.innerHTML = `
      <h3>${chapter.title}</h3>
      <p>${chapter.subtitle}</p>
      <div class="badge-row">
        <span class="badge high-priority">HIGH PRIORITY</span>
        <span class="badge dr-emphasized">DR EMPHASIZED</span>
        <span class="badge exam-question">EXAM QUESTION</span>
      </div>
      <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
        <button class="go-btn" data-go="${chapter.id}">Open Chapter</button>
        <button class="study-btn" data-study="${chapter.id}">${studied.has(chapter.id) ? "Studied ✓" : "Mark Studied"}</button>
      </div>
    `;
    holder.appendChild(card);
  });

  const formulaCard = document.createElement("article");
  formulaCard.className = "chapter-card chapter-card--formula";
  formulaCard.innerHTML = `
    <h3>Quick Formula Revision</h3>
    <p>Open the standalone Formula Sheet for EVM, ROI, PERT, and quick decision rules.</p>
    <div class="badge-row">
      <span class="badge formula">FORMULA</span>
      <span class="badge high-priority">HIGH PRIORITY</span>
    </div>
    <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
      <button class="go-btn" data-go="formula-sheet">Open Formula Sheet</button>
    </div>
  `;
  holder.appendChild(formulaCard);

  holder.querySelectorAll(".go-btn").forEach((btn) => {
    btn.addEventListener("click", () => navigateTo(btn.dataset.go));
  });

  holder.querySelectorAll(".study-btn").forEach((btn) => {
    btn.addEventListener("click", () => toggleStudied(btn.dataset.study));
  });
}

function createBadge(label) {
  const lower = label.toLowerCase().replace(/\s+/g, "-");
  return `<span class="badge ${lower}">${label}</span>`;
}

function chapterMarkup(chapter, studied) {
  const sections = chapter.sections
    .map((section, index) => {
      const badges = section.badges.map(createBadge).join(" ");
      return `
        <section class="accordion-item" data-section-id="${section.id}">
          <button class="accordion-toggle" type="button" aria-expanded="false">
            <strong>${index + 1}. ${section.title}</strong>
            <span>+</span>
          </button>
          <div class="accordion-content">
            <div class="inner">
              <div class="badge-row">${badges}</div>
              ${section.html}
            </div>
          </div>
        </section>
      `;
    })
    .join("");

  const examQuestions = chapter.exam
    .map(
      (item, idx) => `
      <section class="accordion-item" data-section-id="exam-${idx + 1}">
        <button class="accordion-toggle" type="button" aria-expanded="false">
          <strong>Exam Q${idx + 1}: ${item.q}</strong>
          <span>+</span>
        </button>
        <div class="accordion-content">
          <div class="inner">
            <div class="badge-row">
              ${createBadge("EXAM QUESTION")}
              ${createBadge("DR EMPHASIZED")}
            </div>
            <p><strong>Model Answer:</strong></p>
            <p>${item.a}</p>
          </div>
        </div>
      </section>
    `
    )
    .join("");

  return `
    <section class="page" id="${chapter.id}">
      <header class="chapter-header">
        <h2>${chapter.title}</h2>
        <p>${chapter.subtitle}</p>
        <div class="actions">
          <button type="button" data-study-toggle="${chapter.id}">${studied.has(chapter.id) ? "Studied ✓" : "Mark as Studied"}</button>
          <button type="button" data-open-all="${chapter.id}">Open All</button>
          <button type="button" data-close-all="${chapter.id}">Close All</button>
        </div>
        <input class="chapter-filter" id="filter-${chapter.id}" placeholder="Filter this chapter live (headings, bullets, formulas, tables, Q/A)" />
        <div class="no-chapter-results" id="no-results-${chapter.id}">No results found in this chapter.</div>
      </header>
      ${sections}
      <section class="accordion-item" data-section-id="exam-section">
        <button class="accordion-toggle" type="button" aria-expanded="false">
          <strong>End of Chapter: Exam Questions and Model Answers</strong>
          <span>+</span>
        </button>
        <div class="accordion-content">
          <div class="inner">
            <div class="badge-row">
              ${createBadge("EXAM QUESTION")}
              ${createBadge("HIGH PRIORITY")}
            </div>
            ${examQuestions}
          </div>
        </div>
      </section>
      ${paginationMarkup(chapter.id)}
    </section>
  `;
}

function paginationMarkup(pageId) {
  const ordered = CHAPTERS.map((c) => c.id);
  const index = ordered.indexOf(pageId);
  const prev = index > 0 ? ordered[index - 1] : "dashboard";
  const next = index < ordered.length - 1 ? ordered[index + 1] : "exam-focus";

  return `
    <nav class="pagination" aria-label="Chapter pagination">
      <button type="button" data-nav="${prev}">Previous</button>
      <button type="button" data-nav="${next}">Next</button>
    </nav>
  `;
}

function buildPages() {
  const pagesHost = el("dynamic-pages");
  const studied = getStudiedSet();
  pagesHost.innerHTML = CHAPTERS.map((chapter) => chapterMarkup(chapter, studied)).join("");

  const focus = el("exam-focus");
  focus.innerHTML = `
    <section class="exam-focus-box">
      <h2>EXAM FOCUS: Ultra-Condensed Final Revision</h2>
      <p>Use this page as your final 30-minute cram resource before the exam. Covers highest-yield topics, traps, and definitions.</p>

      <h3 style="margin-top: 20px; color: var(--brand);">MOST LIKELY ESSAY QUESTIONS</h3>
      <ul>
        <li><strong>Process Groups:</strong> Define them and explain why all five matter.</li>
        <li><strong>WBS:</strong> Explain decomposition, the 100% rule, and scope control.</li>
        <li><strong>Critical Path:</strong> Define it, explain float/slack, and show how forward/backward pass work.</li>
        <li><strong>EVM:</strong> Explain CV, SV, CPI, SPI, EAC, TCPI and interpret results.</li>
        <li><strong>Quality:</strong> Compare QA vs QC; explain prevention vs correction.</li>
        <li><strong>Risk:</strong> Explain threat and opportunity responses; define risk tolerance.</li>
        <li><strong>Stakeholder:</strong> Explain engagement levels and the Power-Interest Grid.</li>
        <li><strong>Integration:</strong> Explain why change control and baseline matter.</li>
      </ul>

      <h3 style="margin-top: 20px; color: var(--brand);">MOST COMMON CONFUSION PAIRS (Exams Love These!)</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Don't Confuse...</th><th>With...</th><th>Key Difference</th></tr></thead>
          <tbody>
            <tr><td>Quality Assurance (QA)</td><td>Quality Control (QC)</td><td>QA = process/prevention; QC = product/detection</td></tr>
            <tr><td>CPM</td><td>PERT</td><td>CPM = deterministic single estimates; PERT = probabilistic three estimates</td></tr>
            <tr><td>Verify Scope</td><td>Control Scope</td><td>Verify = validate deliverables; Control = manage changes</td></tr>
            <tr><td>Precision</td><td>Accuracy</td><td>Precision = repeatability; Accuracy = closeness to target</td></tr>
            <tr><td>Grade</td><td>Quality</td><td>Grade = level; Quality = meeting requirements</td></tr>
            <tr><td>Contingency Reserve</td><td>Management Reserve</td><td>Contingency = known-unknowns in baseline; Management = unknown-unknowns, not in baseline</td></tr>
            <tr><td>Float / Slack</td><td>Duration</td><td>Float = allowable delay; Duration = how long activity takes</td></tr>
            <tr><td>Crashing</td><td>Fast Tracking</td><td>Crashing = add resources; Fast Tracking = overlap tasks</td></tr>
            <tr><td>Charter</td><td>Management Plan</td><td>Charter = authorization; Plan = operational guide</td></tr>
            <tr><td>Risk Appetite</td><td>Risk Tolerance</td><td>Appetite = what org wants to pursue; Tolerance = what org can accept</td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">FORMULA INTERPRETATION CHEAT SHEET</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Formula/Metric</th><th>Good Sign</th><th>Bad Sign</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>CPI = EV / AC</td><td>> 1 (efficient)</td><td>&lt; 1 (wasteful)</td><td>If &lt;1, tighten spending</td></tr>
            <tr><td>SPI = EV / PV</td><td>> 1 (early)</td><td>&lt; 1 (late)</td><td>If &lt;1, accelerate progress</td></tr>
            <tr><td>CV = EV - AC</td><td>> 0 (under budget)</td><td>&lt; 0 (over budget)</td><td>If &lt;0, request change/replan</td></tr>
            <tr><td>SV = EV - PV</td><td>> 0 (ahead)</td><td>&lt; 0 (behind)</td><td>If &lt;0, expedite critical path</td></tr>
            <tr><td>EAC = BAC / CPI</td><td>≈ BAC (on track)</td><td>> BAC (overrun predicted)</td><td>If > BAC, forecast overrun to sponsor</td></tr>
            <tr><td>TCPI = (BAC-EV)/(BAC-AC)</td><td>&lt; 1 (achievable)</td><td>> 1 (must improve)</td><td>If > 1, efficiency boost required</td></tr>
            <tr><td>Float = LS - ES</td><td>> 0 (schedule margin)</td><td>= 0 (critical path)</td><td>If = 0, protect from delays</td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">DOCTOR'S REPEATED THEMES (High Exam Probability)</h3>
      <ul style="font-weight: bold;">
        <li><strong>Prevention is cheaper than correction:</strong> Invest in quality upfront; prevent scope creep; manage risk early.</li>
        <li><strong>Communication quality matters:</strong> Bad communication causes conflicts, rework, delays; good communication aligns stakeholders.</li>
        <li><strong>Integration and tradeoffs matter:</strong> Changing scope affects time, cost, quality, and resources; PM must balance.</li>
        <li><strong>Scope creep is a killer:</strong> Without strong scope control and change discipline, projects fail.</li>
        <li><strong>Stakeholder expectations must be managed:</strong> Unmet expectations = project failure even if deliverables are technically correct.</li>
        <li><strong>Continuous risk management:</strong> Risk is not a one-time checklist; it must be monitored throughout execution.</li>
        <li><strong>Baseline is sacred:</strong> Approved baseline allows measurement of variance; changes must be documented and integrated.</li>
        <li><strong>All five process groups matter:</strong> Weak planning or weak monitoring causes project trouble downstream.</li>
      </ul>

      <h3 style="margin-top: 20px; color: var(--brand);">FAST RECALL DEFINITIONS (30 Seconds Each)</h3>
      <ul>
        <li><strong>WBS:</strong> Hierarchical decomposition of scope into manageable work packages; ensures 100% of scope is captured and nothing is forgotten.</li>
        <li><strong>Float / Slack:</strong> Amount of time an activity can slip without delaying the project; zero float = critical path.</li>
        <li><strong>Stakeholder:</strong> Anyone affected by or able to affect the project; includes internal and external parties.</li>
        <li><strong>Risk:</strong> Uncertain event that may positively (opportunity) or negatively (threat) affect project objectives.</li>
        <li><strong>Critical Path:</strong> Longest path through the network; determines minimum project duration; has zero float.</li>
        <li><strong>EVM (Earned Value Management):</strong> Technique that integrates scope, schedule, and cost to measure project performance; uses PV, EV, AC.</li>
        <li><strong>DMAIC:</strong> Six Sigma cycle: Define, Measure, Analyze, Improve, Control; data-driven problem-solving approach.</li>
        <li><strong>Integration Management:</strong> Knowledge area that coordinates all other areas (scope, time, cost, quality, risk, stakeholder) into coherent whole.</li>
      </ul>

      <h3 style="margin-top: 20px; color: var(--brand);">KEY FORMULAS (Last 30 Min Memorize)</h3>
      <div class="formula-box" style="margin: 8px 0;">PERT (Three-Point Estimate) = (O + 4M + P) / 6</div>
      <div class="formula-box" style="margin: 8px 0;">Float = LS - ES  OR  Float = LF - EF</div>
      <div class="formula-box" style="margin: 8px 0;">CV = EV - AC   |   SV = EV - PV</div>
      <div class="formula-box" style="margin: 8px 0;">CPI = EV / AC   |   SPI = EV / PV</div>
      <div class="formula-box" style="margin: 8px 0;">EAC = BAC / CPI   |   TCPI = (BAC - EV) / (BAC - AC)</div>
      <div class="formula-box" style="margin: 8px 0;">EMV = Probability × Impact</div>
      <div class="formula-box" style="margin: 8px 0;">ROI = (Benefits - Costs) / Costs</div>

      <h3 style="margin-top: 20px; color: var(--brand);">TOP EXAM TRAPS (Things Exams Trick You On)</h3>
      <ul>
        <li>EV < AC does NOT mean on schedule; it means over budget. Use SV for schedule variance.</li>
        <li>Float ≠ Duration. Activity can have long duration but zero float (critical path).</li>
        <li>QA and QC have opposite focuses: QA prevents, QC detects. Don't mix them up.</li>
        <li>Charter is issued BY sponsor; Management Plan is created BY PM. Different owners.</li>
        <li>Contingency reserve IS in baseline; Management reserve is NOT. Big difference for budgeting.</li>
        <li>Scope creep happens quietly. Without change control discipline, overruns sneak up on you.</li>
        <li>PERT and CPM are not the same. PERT handles uncertainty; CPM finds critical path.</li>
        <li>Stakeholder satisfaction ≠ deadline met. You can deliver on time but still fail if stakeholders are unhappy.</li>
      </ul>

      <h3 style="margin-top: 20px; color: var(--brand);">HIGH EMPHASIS TOPICS (Dr's Core Exam Themes)</h3>
      <ul>${HIGH_EMPHASIS.map((item) => `<li><strong>${item}</strong></li>`).join("")}</ul>

      <h3 style="margin-top: 20px; color: var(--brand);">LESS EMPHASIZED (Lower Exam Probability)</h3>
      <ul>${LESS_EMPHASIS.map((item) => `<li>${item}</li>`).join("")}</ul>

      <p style="margin-top: 20px; padding: 12px; background: rgba(var(--brand-rgb, 100, 150, 200), 0.1); border-radius: 8px;">
        <strong>✓ Exam Strategy:</strong> Read essay questions carefully. Answer = definition + explanation + structured points + brief example + why it matters + conclusion. Show your thinking, not just keywords. Quality over quantity.
      </p>
      ${paginationMarkup("chapter14")}
    </section>
  `;
  const formulaSheet = el("formula-sheet");
  formulaSheet.innerHTML = `
    <section class="exam-focus-box">
      <h2>📋 FORMULA SHEET & QUICK REFERENCE</h2>
      <p><strong>Print-friendly formula reference with interpretations, examples, and decision rules.</strong> Use in study or bring notes to open-book exams.</p>

      <h3 style="margin-top: 20px; color: var(--brand);">⚡ ULTRA FAST RECALL (Top of Sheet)</h3>
      <ul style="font-size: 0.95em;">
        <li><strong>Critical Path:</strong> Longest path through network, determines min project duration, has 0 float</li>
        <li><strong>Float Formula:</strong> TF = LS - ES (or LF - EF); means activity can slip this many days without delaying project</li>
        <li><strong>PERT Formula:</strong> (Optimistic + 4×Most Likely + Pessimistic) / 6; handles uncertainty in duration estimates</li>
        <li><strong>BAC = Budget at Completion:</strong> Total approved project budget baseline, set during cost planning</li>
        <li><strong>EVM Core:</strong> PV (planned), EV (earned), AC (actual); compare for cost and schedule variance</li>
        <li><strong>Contingency Reserve:</strong> Built into baseline, covers known-unknown risks (plan)contingencies</li>
        <li><strong>Management Reserve:</strong> NOT in baseline, covers unknown-unknown risks (sponsor discretion)</li>
      </ul>

      <h3 style="margin-top: 20px; color: var(--brand);">📅 Schedule Formulas</h3>

      <div class="formula-grid">
        <div class="formula-card">
          <h3>Float (Slack)</h3>
          <div class="formula-display">TF = LS - ES  OR  TF = LF - EF</div>
          <div class="formula-vars"><strong>Variables:</strong><ul><li>LS = Late Start</li><li>ES = Early Start</li><li>LF = Late Finish</li><li>EF = Early Finish</li></ul></div>
          <div class="formula-interpretation"><strong>What it means:</strong> Days activity can slip without delaying project. TF = 0 means critical path (no flexibility). TF > 0 means schedule margin (can be delayed TF days safely).</div>
        </div>

        <div class="formula-card">
          <h3>PERT Three-Point Estimate</h3>
          <div class="formula-display">Expected Duration = (O + 4M + P) / 6</div>
          <div class="formula-vars"><strong>Variables:</strong><ul><li>O = Optimistic</li><li>M = Most Likely</li><li>P = Pessimistic</li></ul></div>
          <div class="formula-interpretation"><strong>Example:</strong> Task: O=2, M=5, P=14 days → Expected = (2+20+14)/6 = 6 days. Handles uncertainty better than single estimate.</div>
        </div>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">💰 Cost & Earned Value Management (EVM) Formulas</h3>

      <div class="formula-grid">
        <div class="formula-card">
          <h3>Cost Variance (CV)</h3>
          <div class="formula-display">CV = EV - AC</div>
          <div class="formula-vars"><strong>Variables:</strong><ul><li>EV = Earned Value (% work done × budget)</li><li>AC = Actual Cost (what you spent)</li></ul></div>
          <div class="formula-interpretation"><strong>Interpretation:</strong> CV > 0 = under budget (good). CV < 0 = over budget (bad). CV = 0 = on budget (neutral).</div>
        </div>

        <div class="formula-card">
          <h3>Schedule Variance (SV)</h3>
          <div class="formula-display">SV = EV - PV</div>
          <div class="formula-vars"><strong>Variables:</strong><ul><li>EV = Earned Value</li><li>PV = Planned Value (% work scheduled × budget)</li></ul></div>
          <div class="formula-interpretation"><strong>Interpretation:</strong> SV > 0 = ahead of schedule (good). SV < 0 = behind schedule (bad). Tells you schedule health, NOT cost.</div>
        </div>

        <div class="formula-card">
          <h3>Cost Performance Index (CPI)</h3>
          <div class="formula-display">CPI = EV / AC</div>
          <div class="formula-vars"><strong>Example:</strong> EV=$90K, AC=$100K → CPI = 0.9 (inefficient, spending $1.11 per $1 earned)</div>
          <div class="formula-interpretation"><strong>Decision Rule:</strong> CPI > 1 = efficient. CPI < 1 = wasteful. CPI = 1 = perfect. Watch for CPI < 0.95 (warning zone).</div>
        </div>

        <div class="formula-card">
          <h3>Schedule Performance Index (SPI)</h3>
          <div class="formula-display">SPI = EV / PV</div>
          <div class="formula-vars"><strong>Example:</strong> EV=$80K, PV=$100K → SPI = 0.8 (only 80% progress vs 100% planned)</div>
          <div class="formula-interpretation"><strong>Decision Rule:</strong> SPI > 1 = ahead. SPI < 1 = behind. SPI = 1 = on schedule.</div>
        </div>

        <div class="formula-card">
          <h3>Estimate at Completion (EAC)</h3>
          <div class="formula-display">EAC = BAC / CPI</div>
          <div class="formula-vars"><strong>Example:</strong> BAC=$500K, CPI=0.8 → EAC = $625K (will cost AED125K more than planned)</div>
          <div class="formula-interpretation"><strong>Action:</strong> If EAC > BAC, forecast overrun to sponsor. Project will exceed budget unless efficiency improves.</div>
        </div>

        <div class="formula-card">
          <h3>Estimate to Complete (ETC)</h3>
          <div class="formula-display">ETC = EAC - AC</div>
          <div class="formula-vars"><strong>Example:</strong> EAC=$625K, AC=$400K → ETC = $225K remaining to complete project</div>
          <div class="formula-interpretation"><strong>Use:</strong> Tells sponsor how much more money is needed. Request additional budget or implement controls.</div>
        </div>

        <div class="formula-card">
          <h3>To-Complete Performance Index (TCPI)</h3>
          <div class="formula-display">TCPI = (BAC - EV) / (BAC - AC)</div>
          <div class="formula-vars"><strong>Example:</strong> BAC=$500K, EV=$300K, AC=$350K → TCPI = $200K / $150K = 1.33</div>
          <div class="formula-interpretation"><strong>Action:</strong> TCPI > 1 = must work harder (improve efficiency). TCPI < 1 = can relax (efficiency margin exists). TCPI = 1 = stay on track.</div>
        </div>

        <div class="formula-card">
          <h3>Return on Investment (ROI)</h3>
          <div class="formula-display">ROI = (Benefits - Costs) / Costs × 100%</div>
          <div class="formula-vars"><strong>Example:</strong> Cost=$100K, Benefit=$150K → ROI = (150-100)/100 = 50% return</div>
          <div class="formula-interpretation"><strong>Use:</strong> Justify project value to stakeholders. Higher ROI = more attractive project.</div>
        </div>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">📊 Risk & Opportunity Formulas</h3>

      <div class="formula-grid">
        <div class="formula-card">
          <h3>Expected Monetary Value (EMV)</h3>
          <div class="formula-display">EMV = Probability × Impact</div>
          <div class="formula-vars"><strong>Example Risk:</strong> 30% chance of AED100K cost overrun → EMV = 0.30 × 100K = AED30K expected exposure</div>
          <div class="formula-vars"><strong>Example Opportunity:</strong> 20% chance of AED50K savings → EMV = 0.20 × 50K = AED10K expected benefit</div>
          <div class="formula-interpretation"><strong>Use:</strong> Prioritize risks/opportunities by expected value. Higher EMV = allocate more management attention.</div>
        </div>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">⚙️ Reserve Structure Visual</h3>
      <div style="background: rgba(var(--brand-rgb, 100, 150, 200), 0.05); padding: 16px; border-radius: 8px; margin: 12px 0;">
        <strong>Cost Budget Layers:</strong>
        <ul style="margin: 8px 0; font-family: monospace; font-size: 0.9em;">
          <li>Detailed Cost Estimates (resources, duration × rates)</li>
          <li>+ Contingency Reserve (known risks, e.g., weather delays) = <strong>COST BASELINE (in project plan, in baseline)</strong></li>
          <li>+ Management Reserve (unknown risks, sponsor discretion) = <strong>PROJECT BUDGET (total authorization)</strong></li>
        </ul>
        <strong>Key Difference:</strong> Contingency IS tracked in EVM (planned); Management Reserve is outside baseline (discretionary).
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">🔄 Crashing vs Fast Tracking Comparison</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Dimension</th><th>Crashing</th><th>Fast Tracking</th></tr></thead>
          <tbody>
            <tr><td><strong>Definition</strong></td><td>Add resources to critical activities</td><td>Overlap sequential tasks</td></tr>
            <tr><td><strong>Cost Impact</strong></td><td>Increases (more labor/materials)</td><td>Minimal cost impact</td></tr>
            <tr><td><strong>Schedule Benefit</strong></td><td>Can reduce duration significantly</td><td>Can reduce duration moderately</td></tr>
            <tr><td><strong>Risk Impact</strong></td><td>Low risk (proven approach)</td><td>High risk (more rework/coordination)</td></tr>
            <tr><td><strong>Example</strong></td><td>Hire extra carpenters to finish house faster</td><td>Start painting while walls still drying</td></tr>
            <tr><td><strong>Best For</strong></td><td>When you have budget flexibility</td><td>When you have schedule pressure but budget is tight</td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">⚠️ COMMON EXAM TRAPS (Remember These!)</h3>
      <ul style="background: rgba(255, 100, 100, 0.05); padding: 12px; border-left: 4px solid #ff6464; border-radius: 4px;">
        <li><strong>EV &lt; AC does NOT mean behind schedule:</strong> It means over budget. Use SV to measure schedule (not CV).</li>
        <li><strong>Float ≠ Duration:</strong> An activity can have 30-day duration but 0 float (critical path). Can't delay without impacting project.</li>
        <li><strong>CPI &lt; 1 = spending inefficiently, not necessarily failure:</strong> Project can complete on-time with low CPI if schedule has floats on non-critical tasks.</li>
        <li><strong>Contingency IS in baseline, Management Reserve is NOT:</strong> Very common exam distinction. Big difference for budget planning.</li>
        <li><strong>PERT ≠ CPM:</strong> PERT handles uncertainty in estimates. CPM finds the critical path. Both are used together, not interchangeable.</li>
        <li><strong>Cost of Quality ≠ Quality Cost:</strong> CoQ includes prevention (training, reviews) AND detection (testing, inspection) AND failure costs (rework, warranty).</li>
      </ul>

      <h3 style="margin-top: 20px; color: var(--brand);">📋 EVM Quick Decision Rules</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Indicator</th><th>Threshold</th><th>Meaning</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>CV</td><td>&lt; 0</td><td>Over budget</td><td>Reduce scope or find cost savings</td></tr>
            <tr><td>SV</td><td>&lt; 0</td><td>Behind schedule</td><td>Accelerate tasks, add resources</td></tr>
            <tr><td>CPI</td><td>&lt; 1</td><td>Inefficient spending</td><td>Investigate cost control violations</td></tr>
            <tr><td>CPI</td><td>&lt; 0.95</td><td>Warning zone</td><td>Immediate corrective action needed</td></tr>
            <tr><td>SPI</td><td>&lt; 1</td><td>Inefficient progress</td><td>Evaluate resource/dependency bottlenecks</td></tr>
            <tr><td>EAC</td><td>&gt; BAC</td><td>Will overrun budget</td><td>Request change or implement controls</td></tr>
            <tr><td>TCPI</td><td>&gt; 1</td><td>Must improve efficiency</td><td>Prioritize high-impact cost reductions</td></tr>
            <tr><td>TCPI</td><td>&gt; 1.1</td><td>Unlikely achievable</td><td>Escalate to sponsor, request change</td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 20px; color: var(--brand);">🖨️ Print Tips</h3>
      <ul style="font-size: 0.9em;">
        <li>Print with "Print backgrounds" enabled to show colored boxes</li>
        <li>Use landscape orientation for table readability</li>
        <li>Print at 85-90% scale to fit more content per page</li>
        <li>Bring with highlighter to mark key formulas during study</li>
      </ul>

      <nav class="pagination" aria-label="Formula sheet navigation" style="margin-top: 20px;">
        <button type="button" data-nav="chapter14">← Back to Chapter 14</button>
        <button type="button" data-nav="dashboard">Dashboard</button>
      </nav>
    </section>
  `;
}

function getAccordionContent(item) {
  return item.querySelector(":scope > .accordion-content") || item.querySelector(".accordion-content");
}

function syncAncestorAccordionHeights(item) {
  let ancestor = item.parentElement ? item.parentElement.closest(".accordion-item") : null;

  while (ancestor) {
    if (ancestor.classList.contains("open")) {
      const ancestorContent = getAccordionContent(ancestor);
      if (ancestorContent && ancestorContent.style.maxHeight !== "none") {
        ancestorContent.style.maxHeight = `${ancestorContent.scrollHeight}px`;
      }
    }
    ancestor = ancestor.parentElement ? ancestor.parentElement.closest(".accordion-item") : null;
  }
}

function toggleAccordion(item, forceOpen = null) {
  const content = getAccordionContent(item);
  const button = item.querySelector(".accordion-toggle");
  const icon = button.querySelector("span");
  const open = forceOpen === null ? !item.classList.contains("open") : forceOpen;

  if (open) {
    item.classList.add("open");
    button.setAttribute("aria-expanded", "true");
    icon.textContent = "-";
    content.style.overflow = "hidden";

    if (content.style.maxHeight === "none") {
      content.style.maxHeight = "0px";
    }

    requestAnimationFrame(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
      syncAncestorAccordionHeights(item);
    });

    const onOpenTransitionEnd = () => {
      if (item.classList.contains("open")) {
        content.style.maxHeight = "none";
        content.style.overflow = "visible";
        syncAncestorAccordionHeights(item);
      }
    };

    content.addEventListener("transitionend", onOpenTransitionEnd, { once: true });
  } else {
    item.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    icon.textContent = "+";
    content.style.overflow = "hidden";

    if (content.style.maxHeight === "none") {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }

    requestAnimationFrame(() => {
      content.style.maxHeight = "0px";
      syncAncestorAccordionHeights(item);
    });

    const onCloseTransitionEnd = () => {
      syncAncestorAccordionHeights(item);
    };

    content.addEventListener("transitionend", onCloseTransitionEnd, { once: true });
  }
}

function bindAccordions() {
  document.querySelectorAll(".accordion-item").forEach((item) => {
    const btn = item.querySelector(".accordion-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => toggleAccordion(item));
  });

  document.querySelectorAll("[data-open-all]").forEach((button) => {
    button.addEventListener("click", () => {
      const page = el(button.dataset.openAll);
      page.querySelectorAll(":scope .accordion-item").forEach((item) => toggleAccordion(item, true));
    });
  });

  document.querySelectorAll("[data-close-all]").forEach((button) => {
    button.addEventListener("click", () => {
      const page = el(button.dataset.closeAll);
      page.querySelectorAll(":scope .accordion-item").forEach((item) => toggleAccordion(item, false));
    });
  });

  document.querySelectorAll("[data-study-toggle]").forEach((button) => {
    button.addEventListener("click", () => toggleStudied(button.dataset.studyToggle));
  });

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => navigateTo(button.dataset.nav));
  });
}

function clearHighlights(root = document) {
  root.querySelectorAll("mark.search-hit").forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function highlightTerm(root, query) {
  clearHighlights(root);
  if (!query) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.parentElement && node.parentElement.closest(".accordion-toggle")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
  const targets = [];
  while (walker.nextNode()) {
    targets.push(walker.currentNode);
  }

  targets.forEach((textNode) => {
    if (!regex.test(textNode.nodeValue)) return;
    regex.lastIndex = 0;
    const span = document.createElement("span");
    span.innerHTML = textNode.nodeValue.replace(regex, "<mark class=\"search-hit\">$1</mark>");
    textNode.parentNode.replaceChild(span, textNode);
  });
}

function navigateTo(pageId, sectionId = null, highlight = "") {
  const target = el(pageId);
  if (!target) return;

  activePageId = pageId;
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.target === pageId);
  });

  history.replaceState(null, "", `#${pageId}${sectionId ? `/${sectionId}` : ""}`);

  if (sectionId) {
    const section = target.querySelector(`[data-section-id="${sectionId}"]`);
    if (section) {
      toggleAccordion(section, true);
      if (highlight) highlightTerm(section, highlight);
      const hiddenHit = section.querySelector("mark.search-hit")?.closest(".less-emphasized");
      if (hiddenHit && document.documentElement.classList.contains("quick-revision-active")) {
        setQuickRevisionMode(false);
      }
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    clearHighlights(target);
    if (highlight) {
      highlightTerm(target, highlight);
      const hiddenHit = target.querySelector("mark.search-hit")?.closest(".less-emphasized");
      if (hiddenHit && document.documentElement.classList.contains("quick-revision-active")) {
        setQuickRevisionMode(false);
      }
      const firstHit = target.querySelector("mark.search-hit");
      if (firstHit) {
        firstHit.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (isMobileViewport()) {
    closeMobileSidebar();
  }
}

function toggleStudied(chapterId) {
  const set = getStudiedSet();
  if (set.has(chapterId)) {
    set.delete(chapterId);
  } else {
    set.add(chapterId);
  }
  saveStudiedSet(set);
  refreshProgress();
  buildSidebar();
  buildDashboard();
  buildPages();
  bindAccordions();
  bindChapterFilters();
  navigateTo(activePageId);
}

function refreshProgress() {
  const set = getStudiedSet();
  const total = CHAPTERS.length;
  const done = CHAPTERS.filter((c) => set.has(c.id)).length;
  const pct = Math.round((done / total) * 100);
  el("progress-bar").style.width = `${pct}%`;
  el("progress-text").textContent = `${done}/${total} chapters studied (${pct}%)`;
}

function textFromHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function normalizeSearchText(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSearchIndex() {
  const index = [];
  CHAPTERS.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      index.push({
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        sectionId: section.id,
        sectionTitle: section.title,
        haystack: normalizeSearchText(`${chapter.title} ${chapter.subtitle} ${section.title} ${section.badges.join(" ")} ${textFromHtml(section.html)}`)
      });
    });
    chapter.exam.forEach((item, idx) => {
      index.push({
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        sectionId: "exam-section",
        sectionTitle: `Exam Q${idx + 1}`,
        haystack: normalizeSearchText(`${chapter.title} ${item.q} ${item.a}`)
      });
    });
  });

  index.push({
    chapterId: "exam-focus",
    chapterTitle: "Exam Focus",
    sectionId: "",
    sectionTitle: "High-Yield Topics",
    haystack: normalizeSearchText(`${textFromHtml(el("exam-focus")?.innerHTML || "")} ${HIGH_EMPHASIS.join(" ")} ${LESS_EMPHASIS.join(" ")}`)
  });

  index.push({
    chapterId: "formula-sheet",
    chapterTitle: "Formula Sheet",
    sectionId: "",
    sectionTitle: "Quick Formula Revision",
    haystack: normalizeSearchText(`${textFromHtml(el("formula-sheet")?.innerHTML || "")} quick formula revision formula sheet evm roi pert tcpi cpi spi formulas`)
  });

  return index;
}

function bindGlobalSearch() {
  const input = el("global-search");
  const resultsBox = el("search-results");
  const runSearch = debounce(() => {
    const index = buildSearchIndex();
    const rawQuery = input.value.trim();
    const query = normalizeSearchText(rawQuery);
    clearHighlights(document);
    resultsBox.innerHTML = "";

    if (!query) {
      resultsBox.style.display = "none";
      return;
    }

    const matches = index.filter((row) => row.haystack.includes(query)).slice(0, 40);
    resultsBox.style.display = "block";

    if (!matches.length) {
      const empty = document.createElement("div");
      empty.className = "search-result-item";
      empty.innerHTML = `<div class="title">No results found</div>`;
      resultsBox.appendChild(empty);
      return;
    }

    matches.forEach((row) => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <div class="meta">${row.chapterTitle}</div>
        <div class="title">${row.sectionTitle}</div>
      `;
      item.addEventListener("click", () => {
        resultsBox.style.display = "none";
        input.value = "";
        navigateTo(row.chapterId, row.sectionId || null, rawQuery);
      });
      resultsBox.appendChild(item);
    });
  }, SEARCH_DEBOUNCE_MS);

  input.addEventListener("input", runSearch);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-wrap")) {
      resultsBox.style.display = "none";
    }
  });
}

function setQuickRevisionMode(active) {
  document.documentElement.classList.toggle("quick-revision-active", active);
  localStorage.setItem(QUICK_REVISION_KEY, String(active));
  const quickRevBtn = el("quick-revision-btn");
  if (quickRevBtn) {
    quickRevBtn.textContent = active ? "📚 Full Study" : "📖 Study Mode";
  }
}

function bindChapterFilters() {
  CHAPTERS.forEach((chapter) => {
    const input = el(`filter-${chapter.id}`);
    const page = el(chapter.id);
    const notice = el(`no-results-${chapter.id}`);
    if (!input || !page || !notice) return;

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;
      clearHighlights(page);

      page.querySelectorAll(":scope .accordion-item").forEach((item) => {
        const txt = item.textContent.toLowerCase();
        if (!query || txt.includes(query)) {
          item.style.display = "block";
          visibleCount += 1;
          if (query) {
            toggleAccordion(item, true);
            highlightTerm(item, query);
          }
        } else {
          item.style.display = "none";
        }
      });

      notice.style.display = visibleCount === 0 ? "block" : "none";
    });
  });
}

function initTheme() {
  const themeToggle = el("theme-toggle");
  if (!themeToggle) return;

  const saved = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", saved);
  themeToggle.textContent = saved === "light" ? "Dark Mode" : "Light Mode";

  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
    themeToggle.textContent = next === "light" ? "Dark Mode" : "Light Mode";
  });
}

function bindTopButtons() {
  el("to-dashboard").addEventListener("click", () => navigateTo("dashboard"));
  el("to-exam-focus").addEventListener("click", () => navigateTo("exam-focus"));

  const hamburger = el("hamburger-menu");
  const overlay = el("mobile-overlay");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (!isMobileViewport()) return;
      toggleMobileSidebar();
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMobileSidebar);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileSidebar();
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobileViewport()) {
      closeMobileSidebar();
    }
  });

  const quickRevBtn = el("quick-revision-btn");
  if (quickRevBtn) {
    const isQuickMode = localStorage.getItem(QUICK_REVISION_KEY) === "true";
    setQuickRevisionMode(isQuickMode);
    quickRevBtn.addEventListener("click", () => {
      setQuickRevisionMode(!document.documentElement.classList.contains("quick-revision-active"));
    });
  }

  const backTop = el("back-to-top");
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 260 ? "block" : "none";
  });
}

function loadFromHash() {
  const hash = location.hash.replace(/^#/, "");
  if (!hash) {
    navigateTo("dashboard");
    return;
  }

  const [pageId, sectionId] = hash.split("/");
  if (el(pageId)) {
    navigateTo(pageId, sectionId || null);
  } else {
    navigateTo("dashboard");
  }
}

function init() {
  const isQuickMode = localStorage.getItem(QUICK_REVISION_KEY) === "true";
  if (isQuickMode) {
    document.documentElement.classList.add("quick-revision-active");
  }
  buildSidebar();
  buildDashboard();
  buildPages();
  bindAccordions();
  bindChapterFilters();
  bindGlobalSearch();
  refreshProgress();
  initTheme();
  bindTopButtons();
  loadFromHash();
  closeMobileSidebar();
}

document.addEventListener("DOMContentLoaded", init);
