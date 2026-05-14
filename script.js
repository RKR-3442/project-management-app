const STUDIED_KEY = "pm-studied-chapters";
const THEME_KEY = "pm-theme";

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
            <a href="#formula-sheet" class="nav-link" data-nav="formula-sheet">📋 Formula Sheet</a>
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
        title: "Knowledge Areas, Methodologies, and Standards",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li><strong>Integration</strong>: putting all parts together.</li>
            <li><strong>Scope and time</strong>: strongly centered in planning.</li>
            <li><strong>Cost</strong>: planning + implementation.</li>
            <li><strong>Quality</strong>: throughout all process groups.</li>
            <li><strong>Communication</strong>: planning, execution, controlling.</li>
            <li><strong>Risk</strong>: planning and execution context.</li>
            <li>A <strong>methodology</strong> explains how to do work; a <strong>standard</strong> explains what should be done.</li>
            <li>Methodology selection must fit the project: Agile, Six Sigma, PRINCE2, RUP, etc.</li>
            <li>Agile benefits reported: faster delivery, better change handling, improved quality/productivity.</li>
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
      },
      {
        id: "w3-burndown-gantt",
        title: "Burndown Chart vs Gantt Chart",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Aspect</th><th>Burndown</th><th>Gantt</th></tr></thead>
              <tbody>
                <tr><td>Primary View</td><td>Remaining work over time</td><td>Tasks on timeline with dates</td></tr>
                <tr><td>Progress Visibility</td><td>Very direct progress signal</td><td>Good planning/dependency view</td></tr>
                <tr><td>Common Use</td><td>Agile sprint/project tracking</td><td>Traditional schedule planning/control</td></tr>
              </tbody>
            </table>
          </div>
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
                <tr><td>Inputs/Elements</td><td>SOW, business case, agreements, EEF, OPA</td><td>Overview, organization, management/technical processes, work/schedule/budget</td></tr>
                <tr><td>Approval</td><td>Stakeholders sign</td><td>Approved baseline for management</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>Charter can be updated, but edits should be documented transparently.</li>
          </ul>
        `
      },
      {
        id: "w4-execution-control",
        title: "Execution, Baseline, and Integrated Change Control",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Execution uses meetings, PMIS, and expert judgment; most project time/cost is spent here.</li>
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
            <li>Configuration management maintains correct and complete product/document descriptions.</li>
            <li>Closing requires finalizing activities and transitioning completed/canceled work.</li>
          </ul>
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
            <li>WBS is central to planning and decomposition into manageable components.</li>
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
            <li><strong>Control Scope</strong>: evaluate and manage requested changes.</li>
          </ol>
          <div class="note">Dr emphasized: WBS and scope creep control are frequent exam focus points.</div>
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
            <li><strong>CPM</strong> highlights critical activities and float using network logic.</li>
            <li><strong>PERT</strong> uses optimistic, most likely, and pessimistic durations, making it more realistic under uncertainty.</li>
            <li>Forward pass computes early start/finish; backward pass computes late start/finish.</li>
            <li>Float/slack: free float and total float represent allowable delay without target damage.</li>
          </ul>
          <div class="note">Dr emphasized: CPM vs PERT and float/slack interpretation are core exam themes.</div>
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
        id: "w8-estimates-reserves",
        title: "Reserves, Estimate Types, and Estimating Techniques",
        badges: ["FORMULA", "EXAM QUESTION"],
        html: `
          <ul>
            <li><strong>Contingency reserve</strong>: known-unknown risks, included in cost baseline.</li>
            <li><strong>Management reserve</strong>: unknown-unknown risks, not in cost baseline but in total budget.</li>
            <li>Estimate types: ROM (-50% to +100%), Budgetary (-10% to +25%), Definitive (-5% to +10%).</li>
            <li>Estimating techniques: analogous, bottom-up, three-point, parametric.</li>
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
            <li><strong>PV</strong>: planned value (scheduled work value).</li>
            <li><strong>EV</strong>: earned value (completed work value).</li>
            <li><strong>AC</strong>: actual cost (spent value).</li>
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
            <li>EAC above BAC means expected overrun at completion.</li>
            <li>AC line moving left/up from baseline trend indicates worsening cost behavior.</li>
            <li>Agile still uses cost control metrics, but tracks iteration/sprint increments continuously.</li>
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
    subtitle: "Planning, assuring, and controlling quality for stakeholder value and risk reduction.",
    sections: [
      {
        id: "w9-core-processes",
        title: "Quality Definition and Processes",
        badges: ["HIGH PRIORITY", "EXAM QUESTION"],
        html: `
          <ul>
            <li>ISO view: quality means meeting customer expectations.</li>
            <li>Quality applies across process and output, not only final deliverable.</li>
            <li>Three process groups in quality management:
              <ul>
                <li>Plan quality management</li>
                <li>Perform quality assurance</li>
                <li>Perform quality control</li>
              </ul>
            </li>
            <li>Quality metrics define measurable standards for conformity and improvement.</li>
          </ul>
        `
      },
      {
        id: "w9-tools",
        title: "Seven Basic Quality Tools",
        badges: ["DR EMPHASIZED", "EXAM QUESTION"],
        html: `
          <ol>
            <li>Cause-and-effect (Fishbone/Ishikawa)</li>
            <li>Control chart</li>
            <li>Check sheet</li>
            <li>Scatter diagram</li>
            <li>Histogram</li>
            <li>Pareto chart (80/20 rule)</li>
            <li>Flowchart</li>
          </ol>
          <ul>
            <li>Pareto prioritizes major causes first.</li>
            <li>Fishbone helps find root causes in complex issues.</li>
            <li>Control chart helps judge whether variation requires action.</li>
          </ul>
        `
      },
      {
        id: "w9-sixsigma",
        title: "Statistical Sampling, Six Sigma, and DMAIC",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED"],
        html: `
          <ul>
            <li>Statistical sampling studies a subset to infer quality behavior of whole population.</li>
            <li>Six Sigma is data-driven process improvement focused on reducing defects and improving performance.</li>
            <li>Target benchmark: about <strong>3.4 defects per million opportunities</strong>.</li>
            <li><strong>DMAIC</strong>: Define, Measure, Analyze, Improve, Control.</li>
            <li>Six Sigma also identifies opportunities, not only defects.</li>
          </ul>
        `
      },
      {
        id: "w9-iso-cost-quality",
        title: "ISO 9000, Cost of Quality, OPM3, and Software",
        badges: ["FORMULA", "LESS EMPHASIZED"],
        html: `
          <ul>
            <li>ISO 9000 provides planning-control-documentation requirements for quality systems.</li>
            <li><strong>Cost of quality</strong> = cost of conformance + cost of nonconformance.</li>
            <li>Cost categories: prevention, appraisal, internal failure, external failure, measurement/test equipment.</li>
            <li>Maturity models like OPM3 support best practices, capabilities, outcomes, and KPIs.</li>
            <li>Software aids quality charts, statistical analysis, and tracking; tool quality depends on correct data input.</li>
          </ul>
          <div class="note">Less emphasized: deep quality guru history and long ISO historical detail.</div>
        `
      }
    ],
    exam: [
      {
        q: "Define project quality management and list its main processes.",
        a: "Project quality management includes the processes used to ensure that project deliverables and project processes satisfy relevant quality requirements and stakeholder expectations. The main processes are planning quality management, performing quality assurance, and performing quality control. Together, they establish standards, evaluate process capability, and verify outputs. This sequence helps prevent defects early and improve performance continuously. Therefore, quality management is central to both project success and customer confidence."
      },
      {
        q: "Compare histogram and Pareto chart.",
        a: "A histogram shows frequency distribution of data categories or variable ranges. A Pareto chart is a special ordered histogram that ranks causes from highest to lowest contribution. The Pareto format helps teams prioritize the vital few causes that create most problems, often aligned with the 80/20 principle. Both are useful, but Pareto is more decision-oriented for prioritization."
      },
      {
        q: "Essay: Explain Six Sigma DMAIC and why it matters.",
        a: "Six Sigma is a disciplined, data-based approach to process improvement that aims to reduce defects and increase performance consistency. Its DMAIC cycle begins by defining the problem and customer requirements, then measuring current performance, analyzing root causes, improving the process with targeted solutions, and controlling the improved state to sustain gains. This method matters because it links statistical evidence to managerial action, reducing trial-and-error decisions. For example, in a project with recurring defects, DMAIC can isolate root causes and validate improvements through measurable indicators. In conclusion, DMAIC improves quality outcomes while strengthening organizational learning and reliability."
      }
    ]
  },
  {
    id: "chapter12",
    title: "Chapter 12: Project Risk Management",
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
                    <li>Defect rate < 1% in software testing</li>
                    <li>Documentation completeness 100%</li>
                    <li>Performance benchmarks (response time < 2 sec)</li>
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
                <li>Levels typically range from Ad-Hoc (1) → Repeatable (2) → Defined (3) → Managed (4) → Optimizing (5).</li>
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
              <div class="note"><strong>Exam tip:</strong> If question asks about process audit or methodology review, it's QA. If about testing or inspection of deliverables, it's QC.</div>
            `
          }
        ],
        exam: [
          {
            q: "Define quality in project management and explain why it matters.",
            a: "Quality in project management refers to the degree to which a deliverable meets stakeholder needs and specified performance requirements. Quality is not luxury but fitness for purpose—it means delivering what was promised in the way it was promised. Quality matters because poor quality leads to rework, customer dissatisfaction, reputation damage, recalls, and external failure costs that far exceed prevention investments. Therefore, integrating quality throughout the project life cycle is critical to project success and organizational value."
          },
          {
            q: "Compare Quality Planning, Quality Assurance, and Quality Control.",
            a: "Quality Planning (Initiating/Planning) defines what quality standards and metrics will apply to the project. Quality Assurance (Planning/Execution) continuously evaluates whether processes are capable of achieving those standards through audits and process reviews—it prevents defects. Quality Control (Monitoring/Controlling) monitors actual deliverables against standards through testing and inspection—it detects and documents defects. In sequence: Plan what we'll accept → QA ensures process is sound → QC verifies output meets the plan. All three are necessary for comprehensive quality management."
          },
          {
            q: "Essay: Explain Six Sigma DMAIC and why organizations use it.",
            a: "Six Sigma is a data-driven methodology aiming to reduce defects to near-zero (3.4 per million). Its DMAIC cycle begins by defining the problem and customer voice, then measures current state performance, analyzes root causes through statistics, implements targeted improvements, and controls the new state to sustain gains. Organizations use DMAIC because it replaces gut feeling with evidence, links process changes to measurable outcomes, and prevents problems from recurring. For example, a delivery company using DMAIC reduced package damage by 70% by identifying root causes (rough sorting) and testing solutions before full rollout. Therefore, DMAIC improves reliability and customer satisfaction while strengthening continuous improvement culture."
          },
          {
            q: "Compare the seven quality tools and identify when to use each.",
            a: "Fishbone (cause-effect) diagram maps factors contributing to a problem, helping teams identify root causes in brainstorms. Pareto chart ranks causes from highest to lowest impact, supporting the 80/20 rule to focus effort on vital few causes. Histogram shows frequency distribution to reveal patterns and abnormality. Control chart tracks process performance over time with upper/lower limits to signal when process drifts out of control. Scatter diagram reveals correlation between variables. Check sheet collects data systematically. Flowchart maps process steps and decisions. Use Fishbone to explore causes, Pareto to prioritize, Histogram/Control Chart to monitor trends, Scatter to find relationships, Check Sheet for data collection, Flowchart to understand process logic. Together they form a complete quality improvement toolkit."
          },
          {
            q: "What is Cost of Quality (CoQ) and how does it guide quality investment decisions?",
            a: "Cost of Quality includes all expenses to achieve and maintain project quality: prevention (training, tools), appraisal (inspection, testing), internal failure (rework, scrap), and external failure (recalls, warranty, reputation damage). External failure is most expensive. CoQ guides investment by showing that upfront prevention spending often prevents larger external failure costs—for example, AED 1000 in testing tools might prevent AED 10,000 in customer recalls. Project managers use CoQ analysis to justify quality spending to stakeholders by proving that quality is an investment, not expense, that improves profitability and reputation."
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
          </ul>
        `
      },
      {
        id: "c12-analysis-responses",
        title: "Qualitative/Quantitative Analysis and Responses",
        badges: ["HIGH PRIORITY", "DR EMPHASIZED", "FORMULA"],
        html: `
          <ul>
            <li>Qualitative analysis: probability/impact matrix, top ten risk tracking, expert judgment.</li>
            <li>Quantitative analysis (large/complex projects): decision tree, simulation, Monte Carlo, sensitivity analysis.</li>
            <li>Negative risk responses: avoid, accept, transfer, mitigate.</li>
            <li>Positive risk responses: exploit, share, enhance, accept.</li>
            <li>Workarounds are unplanned responses when no contingency exists.</li>
            <li>Control outputs include change requests, performance updates, plan/document updates, and OPA updates.</li>
          </ul>
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
        a: "After identifying and analyzing risks, project teams select response strategies based on impact, probability, and cost-effectiveness. For negative risks, strategies include avoidance, acceptance, transfer, and mitigation. For positive risks, strategies include exploitation, sharing, enhancement, and acceptance. The selected strategy should be documented with clear ownership, triggers, and contingency/fallback logic. For example, a technology delay risk might be mitigated with phased testing and vendor backup options. In conclusion, appropriate response strategy selection converts risk analysis into practical project control and better outcome achievement."
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
  "AI in Project Management",
  "Digital Transformation",
  "Scope Creep",
  "WBS",
  "CPM vs PERT",
  "Float/slack",
  "Crashing and Fast Tracking",
  "EVM formulas and interpretation",
  "EAC and TCPI",
  "Six Sigma DMAIC",
  "Risk responses",
  "Monte Carlo simulation",
  "Stakeholder engagement",
  "Stakeholder register",
  "Communication and expectations"
];

const LESS_EMPHASIS = [
  "Long company examples",
  "Quality guru history details",
  "Detailed ISO history",
  "Detailed software brand names",
  "Very long Monte Carlo procedural steps"
];

let activePageId = "dashboard";

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
    { id: "exam-focus", label: "Exam Focus" }
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
      <h2>Exam Focus: Highest Probability Topics</h2>
      <p>Use this page for final revision of likely exam points, formulas, and high-emphasis themes. <a href="#formula-sheet" onclick="navigateTo('formula-sheet'); return false;">→ See Formula Sheet</a></p>
      <h3>HIGH EMPHASIS (Dr emphasized)</h3>
      <ul>${HIGH_EMPHASIS.map((item) => `<li><strong>${item}</strong></li>`).join("")}</ul>
      <h3>LESS EMPHASIZED</h3>
      <ul>${LESS_EMPHASIS.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h3>Formula Focus Block</h3>
      <div class="formula-box">ROI = (Benefits - Costs) / Costs</div>
      <div class="formula-box">CPI = EV / AC, SPI = EV / PV</div>
      <div class="formula-box">EAC = BAC / CPI, ETC = EAC - AC, TCPI = (BAC - EV) / (BAC - AC)</div>
      <h3>Agile vs Traditional Reminder</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Dimension</th><th>Traditional</th><th>Agile</th></tr></thead>
          <tbody>
            <tr><td>Planning style</td><td>Front-loaded baseline planning</td><td>Iterative planning and adaptation</td></tr>
            <tr><td>Schedule view</td><td>Deadline-focused critical path</td><td>Sprint cadence and value flow</td></tr>
            <tr><td>Change handling</td><td>Formal integrated change control</td><td>Frequent reprioritization with governance</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Exam advice:</strong> answer with definition -> explanation -> structured points -> short practical example -> why it matters -> conclusion.</p>
      ${paginationMarkup("chapter14")}
    </section>
  `;
   // Formula Sheet page
   const formulaSheet = document.createElement("section");
   formulaSheet.className = "page";
   formulaSheet.id = "formula-sheet";
   formulaSheet.innerHTML = `
     <section class="exam-focus-box">
       <h2>Formula Sheet & Quick Reference</h2>
       <p>All key formulas for project management with variables, interpretations, and quick examples. <strong>Print-friendly.</strong></p>
       
       <h3 style="margin-top: 20px;">Earned Value Management (EVM)</h3>
       
       <div class="formula-card">
         <h3>Cost Variance (CV)</h3>
         <div class="formula-display">CV = EV - AC</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>EV = Earned Value</li><li>AC = Actual Cost</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> If CV > 0, under budget. If CV < 0, over budget.</div>
       </div>

       <div class="formula-card">
         <h3>Schedule Variance (SV)</h3>
         <div class="formula-display">SV = EV - PV</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>EV = Earned Value</li><li>PV = Planned Value</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> If SV > 0, ahead of schedule. If SV < 0, behind schedule.</div>
       </div>

       <div class="formula-card">
         <h3>Cost Performance Index (CPI)</h3>
         <div class="formula-display">CPI = EV / AC</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>EV = Earned Value</li><li>AC = Actual Cost</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> CPI > 1 = efficient. CPI < 1 = inefficient. CPI = 1 = perfect efficiency.</div>
       </div>

       <div class="formula-card">
         <h3>Schedule Performance Index (SPI)</h3>
         <div class="formula-display">SPI = EV / PV</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>EV = Earned Value</li><li>PV = Planned Value</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> SPI > 1 = ahead. SPI < 1 = behind. SPI = 1 = on schedule.</div>
       </div>

       <div class="formula-card">
         <h3>Estimate at Completion (EAC)</h3>
         <div class="formula-display">EAC = BAC / CPI</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>BAC = Budget at Completion</li><li>CPI = Cost Performance Index</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> Forecasts total project cost based on current performance. If EAC > BAC, project will overrun.</div>
       </div>

       <div class="formula-card">
         <h3>Estimate to Complete (ETC)</h3>
         <div class="formula-display">ETC = EAC - AC</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>EAC = Estimate at Completion</li><li>AC = Actual Cost</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> Remaining budget needed to complete project.</div>
       </div>

       <div class="formula-card">
         <h3>To-Complete Performance Index (TCPI)</h3>
         <div class="formula-display">TCPI = (BAC - EV) / (BAC - AC)</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>BAC = Budget at Completion</li><li>EV = Earned Value</li><li>AC = Actual Cost</li></ul></div>
         <div class="formula-interpretation"><strong>Interpretation:</strong> Required cost efficiency to meet target budget. TCPI > 1 = must improve. TCPI < 1 = can relax.</div>
       </div>

       <h3 style="margin-top: 20px;">Other Key Formulas</h3>

       <div class="formula-card">
         <h3>Return on Investment (ROI)</h3>
         <div class="formula-display">ROI = (Benefits - Costs) / Costs × 100%</div>
         <div class="formula-vars"><strong>Example:</strong> If project costs AED 100K and returns AED 150K, ROI = (150-100)/100 = 50%</div>
       </div>

       <div class="formula-card">
         <h3>PERT Expected Duration</h3>
         <div class="formula-display">Expected Duration = (O + 4M + P) / 6</div>
         <div class="formula-vars"><strong>Variables:</strong><ul><li>O = Optimistic estimate</li><li>M = Most likely estimate</li><li>P = Pessimistic estimate</li></ul></div>
         <div class="formula-interpretation"><strong>Example:</strong> Task estimates: Optimistic 2 days, Most likely 5 days, Pessimistic 8 days. Expected = (2 + 20 + 8) / 6 = 5 days</div>
       </div>

       <h3 style="margin-top: 20px; margin-bottom: 20px;">Quick Decision Rules</h3>
       <div class="table-wrap">
         <table>
           <thead><tr><th>Indicator</th><th>Meaning</th><th>Action</th></tr></thead>
           <tbody>
             <tr><td>CV < 0</td><td>Over budget</td><td>Reduce scope, find cost savings, or request budget increase</td></tr>
             <tr><td>SV < 0</td><td>Behind schedule</td><td>Accelerate tasks, add resources, or reduce scope</td></tr>
             <tr><td>CPI < 1</td><td>Inefficient spending</td><td>Review cost controls, investigate waste</td></tr>
             <tr><td>SPI < 1</td><td>Inefficient schedule progress</td><td>Evaluate resource constraints, dependencies</td></tr>
             <tr><td>EAC > BAC</td><td>Project will overrun budget</td><td>Implement corrective actions or request change</td></tr>
             <tr><td>TCPI > 1</td><td>Must improve efficiency</td><td>Prioritize high-impact cost reductions</td></tr>
           </tbody>
         </table>
       </div>

       <nav class="pagination" aria-label="Formula sheet navigation">
         <button type="button" data-nav="chapter14">Back to Chapter 14</button>
         <button type="button" data-nav="dashboard">Dashboard</button>
       </nav>
     </section>
   `;
   pagesHost.appendChild(formulaSheet);
 }
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
  activePageId = pageId;
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  const target = el(pageId);
  if (!target) return;
  target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.target === pageId);
  });

  history.replaceState(null, "", `#${pageId}${sectionId ? `/${sectionId}` : ""}`);

  if (sectionId) {
    const section = target.querySelector(`[data-section-id="${sectionId}"]`);
    if (section) {
      toggleAccordion(section, true);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      if (highlight) highlightTerm(section, highlight);
    }
  } else {
    clearHighlights(target);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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

function buildSearchIndex() {
  const index = [];
  CHAPTERS.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      index.push({
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        sectionId: section.id,
        sectionTitle: section.title,
        haystack: `${chapter.title} ${section.title} ${textFromHtml(section.html)}`.toLowerCase()
      });
    });
    chapter.exam.forEach((item, idx) => {
      index.push({
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        sectionId: "exam-section",
        sectionTitle: `Exam Q${idx + 1}`,
        haystack: `${chapter.title} ${item.q} ${item.a}`.toLowerCase()
      });
    });
  });

  index.push({
    chapterId: "exam-focus",
    chapterTitle: "Exam Focus",
    sectionId: "",
    sectionTitle: "High-Yield Topics",
    haystack: `${HIGH_EMPHASIS.join(" ")} ${LESS_EMPHASIS.join(" ")}`.toLowerCase()
  });

  return index;
}

function bindGlobalSearch() {
  const input = el("global-search");
  const resultsBox = el("search-results");
  const index = buildSearchIndex();

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
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
        navigateTo(row.chapterId, row.sectionId || null, query);
      });
      resultsBox.appendChild(item);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-wrap")) {
      resultsBox.style.display = "none";
    }
  });
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
  const saved = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", saved);
  el("theme-toggle").textContent = saved === "light" ? "Dark Mode" : "Light Mode";

  el("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
    el("theme-toggle").textContent = next === "light" ? "Dark Mode" : "Light Mode";
  });
}

function bindTopButtons() {
  el("to-dashboard").addEventListener("click", () => navigateTo("dashboard"));
  el("to-exam-focus").addEventListener("click", () => navigateTo("exam-focus"));

  // Hamburger menu toggle
  const hamburger = el("hamburger-menu");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("open");
    });
  }

  // Quick Revision Mode toggle
  const quickRevBtn = el("quick-revision-btn");
  if (quickRevBtn) {
    const isQuickMode = localStorage.getItem("quick-revision-mode") === "true";
    if (isQuickMode) {
      document.documentElement.classList.add("quick-revision-active");
      quickRevBtn.textContent = "📚 Full Study";
    }
    quickRevBtn.addEventListener("click", () => {
      const active = document.documentElement.classList.toggle("quick-revision-active");
      localStorage.setItem("quick-revision-mode", active);
      quickRevBtn.textContent = active ? "📚 Full Study" : "📖 Study Mode";
    });
  }

  // Close sidebar on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.remove("open");
    });
  });

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
  const isQuickMode = localStorage.getItem("quick-revision-mode") === "true";
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
}

document.addEventListener("DOMContentLoaded", init);
